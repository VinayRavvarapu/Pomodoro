import { TimerSettingsActionTypes, ClockActionTypes } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    timerInitialState: {
        sessionLength: 35,
        breakLength: 5
    },

    clockInitialState: {
        isPlay: false,
        isPause: true,
    }
}

export const timerSettings = (state = initialState.timerInitialState, action) => {
    switch (action.type) {
        case TimerSettingsActionTypes.SET_SESSION_LENGTH:
            return { ...state, sessionLength: action.payload.sessionLength };
        case TimerSettingsActionTypes.SET_BREAK_LENGTH:
            return { ...state, breakLength: action.payload.breakLength };
        default:
            return state;
    }
}

export const clock = (state = initialState.clockInitialState, action) => {
    switch (action.type) {
        case ClockActionTypes.SET_PLAY:
            return { ...state, isPlay: action.payload.isPlay , isPause: !action.payload.isPlay};
        case ClockActionTypes.SET_PAUSE:
            return { ...state, isPause: action.payload.isPause, isPlay: !action.payload.isPause };
        default:
            return state;
    }
}

export default combineReducers({ timerSettings, clock });