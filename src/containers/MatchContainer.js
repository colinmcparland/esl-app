import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import MatchTile from 'components/MatchTile';
import style from 'styled-components';

class MatchContainer extends Component {

  render() {

    const {
      contestants,
      results
    } = this.props;

    const FilterContainer = style.div`
      display: flex;
      justify-content: flex-end;
      padding: 15px;
    `;

    return (
      <div>
        <FilterContainer>
          <Dropdown></Dropdown>
        </FilterContainer>
        {
          results && contestants && results.map((result, index) => {

            const { participants } = result;

            const winner = participants[0].points[0] < participants[1].points[0] ? participants[1] : participants[0]; 
            const loser = participants[0].points[0] > participants[1].points[0] ? participants[1] : participants[0];

            const winnerName = contestants.find(contestant => contestant.id === winner.id).name;
            const loserName = contestants.find(contestant => contestant.id === loser.id).name;

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
      </div>
    );
  }

}

export default MatchContainer;