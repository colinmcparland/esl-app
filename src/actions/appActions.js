import axios from 'axios';

/*
  Get the tournament data and dispatch it to the redux store
 */
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
      .catch(err => {
        resolve(dispatch({
          type: 'DATA_ERROR'
        }));
      });
  })
);

/*
  Get the contestant data and dispatch it to the redux store
 */
const getContestants = leagueId => dispatch => (
  new Promise((resolve, reject) => {
    return axios.get(`https://api.eslgaming.com/play/v1/leagues/${leagueId}/contestants`)
      .then(result => {
        resolve(dispatch({
          type: 'CONTESTANT_DATA_LOADED',
          payload: result.data
        }));
      })
      .catch(err => {
        resolve(dispatch({
          type: 'DATA_ERROR'
        }));
      });
  })
);

/*
  Get the result data and dispatch it to the redux store
 */
const getResults = leagueId => dispatch => (
  new Promise((resolve, reject) => {
    return axios.get(`https://api.eslgaming.com/play/v1/leagues/${leagueId}/results`)
      .then(result => {
        resolve(dispatch({
          type: 'RESULT_DATA_LOADED',
          payload: result.data
        }));
      })
      .catch(err => {
        resolve(dispatch({
          type: 'DATA_ERROR'
        }));
      });
  })
);

export default {
  getTournament,
  getContestants,
  getResults
}