import React, { Component } from 'react';

class Title extends Component{
  render() {
    return (
      <div
        style={{
          borderTop: '3px solid green',
          borderRadius: '5px'
        }}
      >
        <h1>Sample Tournament Title</h1>
        <p>
          <small>11/11/2011</small>
        </p>
      </div>
    );
  }
}

export default Title;