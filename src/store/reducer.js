import { GET_LEAGUES, TOGGLE_LEAGUES, SET_PLAYERS } from './types';

 const initialState = {
   leagues: [],
   toggle: [],
   players: [],
}

function reducer(state = initialState, action){
switch (action.type) {
    case GET_LEAGUES:
    return {
      ...state,
      leagues: action.payload,
    };
    case TOGGLE_LEAGUES: 
    let ids = []
    if(!state.toggle.includes(action.payload)) {
      ids = [...state.toggle, action.payload]
    } else {
      ids = state.toggle.filter((id) => id !== action.payload)
    }
    return {
      ...state,
      toggle: ids,
    }
    case SET_PLAYERS: 
    let addedPlayers = []
    if(state.players.length === 2) {
      addedPlayers = [state.players[1], action.payload]
    } else {
      addedPlayers = [...state.players, action.payload]
    }
    return {
      ...state, 
      players: addedPlayers
    }
    default:
      return state;
  }
}
 
export default reducer;
 