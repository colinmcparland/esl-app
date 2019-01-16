import React, { Component } from 'react';
import style from 'styled-components';

class Dropdown extends Component {

  render() {
    const {
      onToggle,
      sortGamesAsc
    } = this.props;

    /*
      Create a styled component for the dropdown button
     */
    const DropdownButton = style.button`
      border-radius: 0;
      background-color: #fff;
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 12px;
    `;

    return (
      <div>
        <DropdownButton
          onClick={ onToggle }
        >
          Date&nbsp;
          {
            sortGamesAsc ?
              "\u25B2" :
              "\u25BC"
          }
        </DropdownButton>
      </div>
    );
  }
}

export default Dropdown;