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
          borderTop: '5px solid #28B662',
          marginBottom: '25px',
          padding: '15px',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ 
          marginBottom: '5px',
          marginTop: '0'
        }}>{ name }</h3>
        <span>
          <small>{ date && moment(date).format('Do MMMM YYYY') }</small>
        </span>
      </div>
    );
  }
}

Title.defaultProps = {
  name: 'Loading...'
}

export default Title;