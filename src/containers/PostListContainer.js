import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Waypoint from 'react-waypoint';

import { fetchPosts, resetPostSearchKey } from '../actions';
import { getFilteredPosts } from '../selectors';
import '../App.css';
import { Header, LoadingSpinner, PostItemCard } from '../components';

injectTapEventPlugin();

const Footer = () => (
  <div
    style={{
      boxSizing: 'border-box',
      marginTop: 50,
      padding: 30,
      background: '#000',
      height: 100,
      width: '100%',
      color: '#FFFFFF',
      textAlign: 'center',
    }}
  >
    footah
  </div>
);

const PostFailedInfo = ({ reloadPostFetch }) => (
  <div>
    <button
      onClick={reloadPostFetch}
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
      Ooops! Something went wrong. Click here to reload data.
    </button>
  </div>
);

const PostListInfo = ({ resetSearchKey }) => (
  <div>
    <button
      onClick={resetSearchKey}
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
      Ooops! Not found. Try another keyword.
    </button>
  </div>
);

class PostListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  reloadPostFetch() {
    this.props.fetchPosts();
  }

  waypointEnter() {
    this.props.fetchPosts();
    console.log('waypointEnter');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
            <div style={{ minHeight: 1000 }}>
              { (this.props.posts.length === 0 && this.props.searchKey !== '') && (
                <PostListInfo resetSearchKey={this.props.resetSearchKey} />
              )}
              { (!this.props.isFetchingPost && this.props.isFetchingPostError) && (
                <PostFailedInfo reloadPostFetch={() => this.reloadPostFetch()} />
              )}
              <div style={{ width: '50%', marginLeft: '25%' }}>
                { this.props.posts.map(post => <PostItemCard key={post.id} {...post} />) }
              </div>
              { this.props.isFetchingPost && (
                <div>
                  <LoadingSpinner />
                </div>
              )}
            </div>
          <Footer />
          <Waypoint onEnter={() => this.waypointEnter()} bottomOffset={'0px'} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  searchKey: state.postSearchKey,
  posts: getFilteredPosts(state),
  isFetchingPost: state.posts.isFetching,
  isFetchingPostError: state.posts.isFetchingError,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  resetSearchKey: () => dispatch(resetPostSearchKey()),
});

PostListContainer.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  isFetchingPost: React.PropTypes.bool.isRequired,
  isFetchingPostError: React.PropTypes.bool.isRequired,
  searchKey: React.PropTypes.string.isRequired,
  fetchPosts: React.PropTypes.func.isRequired,
  resetSearchKey: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
