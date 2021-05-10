import { GET_LEAGUES, TOGGLE_LEAGUES, SET_PLAYERS } from './types';
import { leagues } from './../mockData';

export const getLeagues = () => {
    return {
        type: GET_LEAGUES,
        payload: leagues,
    }
}

export const toggleLeagues = (ids) => {
    return {
        type: TOGGLE_LEAGUES,
        payload: ids,
    }
}

export const setPlayers = (player) => {
    return {
        type: SET_PLAYERS,
        payload: player,
    }
}