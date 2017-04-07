import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchPosts, resetPostSearchKey } from '../actions';
import { getFilteredPosts } from '../selectors';
import '../App.css';
import { Header, LoadingSpinner, PostItemCard } from '../components';

injectTapEventPlugin();

class PostListContainer extends React.Component {
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
  posts: getFilteredPosts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  resetSearchKey: () => dispatch(resetPostSearchKey()),
});

PostListContainer.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  searchKey: React.PropTypes.string.isRequired,
  fetchPosts: React.PropTypes.func.isRequired,
  resetSearchKey: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
