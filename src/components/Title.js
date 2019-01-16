import React, { Component } from 'react';
import moment from 'moment';
import style from 'styled-components';

class Title extends Component{

  render() {
    const {
      name,
      date
    } = this.props;

    /*
      Styled components for the title container and for the title itself
     */
    const TitleContainer = style.div`
      border-top: 5px solid #28B662;
      margin-bottom: 25px;
      padding: 15px;
      border-radius: 4px;
    `;

    const Header = style.h3`
      margin-bottom: 5px;
      margin-top: 0;
    `;

    return (
      <TitleContainer>
        <Header>
          { name }
        </Header>
        <span>
          <small>{ date && moment(date).format('Do MMMM YYYY') }</small>
        </span>
      </TitleContainer>
    );
  }
}

Title.defaultProps = {
  name: 'Loading...'
}

export default Title;