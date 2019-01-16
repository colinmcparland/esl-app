import React, { Component } from 'react';
import moment from 'moment';
import style from 'styled-components';

class MatchTile extends Component {

  render() {

    const {
      winner,
      loser, 
      winnerName,
      loserName,
      date
    } = this.props;

    const TileRow = style.div`
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #ccc;
      padding-left: 15px;
      padding-right: 15px;
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
    `;

    const CompetitorRow = style.div`
      display: flex;
      justify-content: space-between;
    `;

    const WinnerRow = style(CompetitorRow)`
      span {
        margin: 10px 0;
        &:first-child {
          border-left: 4px solid #28B662;
          padding-left: 8px;
        }
        &:last-child {
          font-weight: 700;
        }
      }
    `;

    const LoserRow = style(WinnerRow)`
      span {
        &:first-child {
          border-color: #E43726;
        }
        &:last-child {
          border-color: #E43726;
          font-weight: 400;
        }   
      }
    `;

    return (
      <TileRow>
        <div>
          <small style={{ color: '#666' }}>{ moment(date).format('hh:mm a') }</small>
        </div>
        <div>
          <WinnerRow>
            <span>{ winnerName }</span>
            <span>{ winner.points[0] }</span>
          </WinnerRow>
          <LoserRow>
            <span>{ loserName }</span>
            <span>{ loser.points[0] }</span>
          </LoserRow>
        </div>
      </TileRow>
    );
  }
}


export default MatchTile;