import React, { Component } from 'react';
import moment from 'moment';

class MatchTile extends Component {

  render() {

    const {
      winner,
      loser, 
      winnerName,
      loserName,
      date
    } = this.props;

    return (
      <div>
        <div>{ moment(date).format('LLL') }</div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{ winnerName }</p>
            <p>{ winner.points[0] }</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{ loserName }</p>
            <p>{ loser.points[0] }</p>
          </div>
        </div>
      </div>
    );
  }
}


export default MatchTile;