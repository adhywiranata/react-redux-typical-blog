import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchPosts, resetPostSearchKey } from './actions';
import { getFilteredPost } from './reducers/postReducer';
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
          { (this.props.posts.length === 0 && this.props.searchKey === '') && (
            <div>
              <LoadingSpinner />
            </div>
          )}
          { (this.props.posts.length === 0 && this.props.searchKey !== '') && (
            <div>
              <button
                onClick={this.props.resetSearchKey}
                style={{
                  background: 'transparent',
                  fontSize: 20,
                  margin: 20,
                  color: '#FFFFFF',
                  border: '1px solid white',
                  outline: 'none',
                  padding: 20,
                  borderRadius: 10,
                  cursor: 'pointer',
                }}
              >
                Ooops! No News Found! Reset your keyword.
              </button>
            </div>
          )}
          <div style={{ width: '50%', marginLeft: '25%' }}>
            { this.props.posts.map(post => <PostItemCard key={post.id} {...post} />) }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  searchKey: state.postSearchKey,
  posts: getFilteredPost(state.posts, state.postSearchKey),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  resetSearchKey: () => dispatch(resetPostSearchKey()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
