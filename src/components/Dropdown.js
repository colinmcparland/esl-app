import React, { Component } from 'react';
import style from 'styled-components';

class Dropdown extends Component {
  render() {

    const DropdownButton = style.button`
      border-radius: 0;
      background-color: #fff;
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 12px;
    `;

    return (
      <div>
        <DropdownButton>
          Date &#9650;
        </DropdownButton>
      </div>
    );
  }
}

export default Dropdown;