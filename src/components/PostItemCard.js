import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const PostItemCard = props => (
  <Card style={{ marginTop: 50, paddingBottom: 20 }}>
    <CardHeader
      title="Dave Johnson"
      subtitle="Scientist"
      avatar="http://www.material-ui.com/images/jsa-128.jpg"
      style={{ float: 'left', textAlign: 'left' }}
    />
    <CardMedia>
      <img alt="space" src="http://www.deepspacephotography.com/wp-content/gallery/cache/203__1096x_headerimage_5.jpg" />
    </CardMedia>
    <CardTitle title={props.title} subtitle={props.description} />
    <CardText>{props.content}</CardText>
    <CardActions>
      <RaisedButton label="Read More" primary />
    </CardActions>
  </Card>
);

export default PostItemCard;
