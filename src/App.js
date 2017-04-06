import React, { Component } from 'react';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import postSchema from './schemas/post';
import { fetchPosts } from './actions';
import './App.css';
import { Header, LoadingSpinner, PostItemCard } from './components';

injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          { this.props.posts.length === 0 && (<div>
            <LoadingSpinner />
          </div>)}
          <div style={{ width: '50%', marginLeft: '25%' }}>
            { this.props.posts.map(post => <PostItemCard key={post.id} {...post} />) }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const searchKey = state.postSearchKey;
  const result = state.posts.result === undefined ? { posts: [] } : state.posts.result;
  const denormalizedState = denormalize(result, postSchema, state.posts.entities);
  return {
    posts: denormalizedState.posts.filter(post => post.title.includes(searchKey)),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
