import axios from 'axios';

const getTournament = leagueId => dispatch => (
  new Promise((resolve, reject) => {
    return axios.get(`https://api.eslgaming.com/play/v1/leagues/${leagueId}`)
      .then(result => {
        resolve(dispatch({
          type: 'TOURNAMENT_DATA_LOADED',
          payload: {
            name: result.data.name.full,
            date: result.data.timeline.inProgress.begin
          }
        }));
      })
      .catch(err => console.log(err));
  })
);

const getContestants = leagueId => dispatch => (
  new Promise((resolve, reject) => {
    return axios.get(`https://api.eslgaming.com/play/v1/leagues/${leagueId}/contestants`)
      .then(result => {
        resolve(dispatch({
          type: 'CONTESTANT_DATA_LOADED',
          payload: result.data
        }));
      })
      .catch(err => console.log(err));
  })
);

const getResults = leagueId => dispatch => (
  new Promise((resolve, reject) => {
    return axios.get(`https://api.eslgaming.com/play/v1/leagues/${leagueId}/results`)
      .then(result => {
        resolve(dispatch({
          type: 'RESULT_DATA_LOADED',
          payload: result.data
        }));
      })
      .catch(err => console.log(err));
  })
);

export default {
  getTournament,
  getContestants,
  getResults
}