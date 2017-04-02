import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        1, 2, 3, 4, 5
      ]
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>REACT REDUX TYPICAL BLOG</h2>
          </div>
          <div>
            <RaisedButton label="Default" style={{margin: 20}} />
          </div>
          <div style={{width: '50%', marginLeft: '25%'}}>
            { this.state.posts.map((post, index) => <CardExampleWithAvatar key={index} />) }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const CardExampleWithAvatar = () => (
  <Card style={{marginTop: 50, paddingBottom: 20}}>
    <CardHeader
      title="Dave Johnson"
      subtitle="Scientist"
      avatar="http://www.material-ui.com/images/jsa-128.jpg"
      style={{float: 'left', textAlign: 'left'}}
    />
    <CardMedia>
      <img alt="space" src="http://www.deepspacephotography.com/wp-content/gallery/cache/203__1096x_headerimage_5.jpg" />
    </CardMedia>
    <CardTitle title="Art of Andromeda" subtitle="The Beauty of Outer Space" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <RaisedButton label="Read More" primary={true} />
    </CardActions>
  </Card>
);

export default App;
