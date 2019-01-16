export default (state = {}, action) => {
 switch (action.type) {
  /*
    Add tournament data to the state
   */
  case 'TOURNAMENT_DATA_LOADED':
   return Object.assign({}, state, {
      tournamentName: action.payload.name,
      tournamentDate: action.payload.date
   });
  /*
    Add contestant data to the state
   */
  case 'CONTESTANT_DATA_LOADED':
   return Object.assign({}, state, {
      contestants: action.payload,
   });
  /*
    Add match result data to the state
   */
  case 'RESULT_DATA_LOADED':
   return Object.assign({}, state, {
      results: action.payload,
   });
  /*
    Add an error 
   */
  case 'DATA_ERROR':
   return Object.assign({}, state, {
      error: 'Error fetching data'
   });
  default:
   return state
 }
}