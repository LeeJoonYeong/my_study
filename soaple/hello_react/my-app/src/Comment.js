import React from 'react';

class Comment extends React.Component {

  render() {

    const { author, description } = this.props;

    return (
      <div>
        <h1 style={ {color: 'red'} }>댓글 입니다</h1>
        <p>{author}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default Comment;