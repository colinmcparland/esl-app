import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import MatchTile from 'components/MatchTile';
import style from 'styled-components';
import moment from 'moment';

class MatchContainer extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      sortGamesAsc: true
    };

    this.state = this.initialState;
    this.toggleSortOrder = this.toggleSortOrder.bind(this);
    this.getGameTiles = this.getGameTiles.bind(this);
  }

  /*
    Function to handle a change in sorting
   */
  toggleSortOrder() {
    const {
      sortGamesAsc
    } = this.state;

    this.setState({
      sortGamesAsc: !sortGamesAsc
    });
  }

  /*
    Function to render all the game tiles
   */
  getGameTiles() {
    const {
      contestants,
      results
    } = this.props;

    const {
      sortGamesAsc
    } = this.state;

    /*
      Load the match tiles only if the appropriate data has been loaded
     */
    return results
      .sort((a, b) => {
        /*
          Sort the games accordingly
         */
        const timeA = moment(a.beginAt).valueOf();
        const timeB = moment(b.beginAt).valueOf();

        return sortGamesAsc ?
          timeA - timeB :
          timeB - timeA
      })
      .map((result, index) => {
        const { participants } = result;

        /*
          Check if the points are given, if not, return empty
         */
        if(participants[0].points === null || participants[1].points === null) {
          return null;
        }

        /*
          Find the winning and losing participant by comparing the scores
         */
        const winner = participants[0].points[0] < participants[1].points[0] ?
          participants[1] :
          participants[0]; 

        const loser = participants[0].points[0] > participants[1].points[0] ? 
          participants[1] : 
          participants[0];

        /*
          Get the corresponding contestant and names for the winner and loser, respectively 
         */
        const winningCompetitor = contestants
          .find(contestant => contestant.id === winner.id);

        const losingCompetitor = contestants
          .find(contestant => contestant.id === loser.id);

        const winnerName = winningCompetitor ? 
          winningCompetitor.name :
          'No Name';

        const loserName = losingCompetitor ? 
          losingCompetitor.name :
          'No Name';

        return (
          <MatchTile
            key={ `gametile-${index}` }
            winner={ winner }
            loser={ loser }
            winnerName={ winnerName }
            loserName={ loserName }
            date={ result.beginAt }
          ></MatchTile>
        );
      })
  }

  render() {
    const {
      sortGamesAsc
    } = this.state;

    const {
      results,
      contestants
    } = this.props;

    const FilterContainer = style.div`
      display: flex;
      justify-content: flex-end;
      padding: 15px;
    `;

    return (
      <div>
        <FilterContainer>
          <Dropdown
            onToggle={ () => this.toggleSortOrder() }
            sortGamesAsc={ sortGamesAsc }
          ></Dropdown>
        </FilterContainer>
        { results && contestants && this.getGameTiles() }
      </div>
    );
  }
}

export default MatchContainer;