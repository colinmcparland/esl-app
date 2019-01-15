export default (state = {}, action) => {
 switch (action.type) {
  case 'TOURNAMENT_DATA_LOADED':
   return Object.assign({}, state, {
      tournamentName: action.payload.name,
      tournamentDate: action.payload.date
   });
  case 'CONTESTANT_DATA_LOADED':
   return Object.assign({}, state, {
      contestants: action.payload,
   });
  case 'RESULT_DATA_LOADED':
   return Object.assign({}, state, {
      results: action.payload,
   });
  default:
   return state
 }
}