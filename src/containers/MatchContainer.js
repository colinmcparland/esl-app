import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import MatchTile from 'components/MatchTile';

class MatchContainer extends Component {

  render() {

    const {
      contestants,
      results
    } = this.props;

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Dropdown></Dropdown>
        </div>
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