import React, { Component } from 'react';
import moment from 'moment';

class Title extends Component{
  render() {

  const {
    name,
    date
  } = this.props;

    return (
      <div
        style={{
          borderTop: '3px solid green',
        }}
      >
        <h1>{ name }</h1>
        <p>
          <small>{ date && moment(date).format('LLL') }</small>
        </p>
      </div>
    );
  }
}

Title.defaultProps = {
  name: 'Loading...'
}

export default Title;