import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
            { this.props.posts.map(post => <PostItemCard key={post._id} {...post} />) }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
