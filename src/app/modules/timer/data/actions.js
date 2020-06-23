export const TimerSettingsActionTypes = {
    SET_SESSION_LENGTH: 'SET_SESSION_LENGTH',
    SET_BREAK_LENGTH: 'SET_BREAK_LENGTH'
}

export const ClockActionTypes = {
    SET_PLAY: 'SET_PLAY',
    SET_PAUSE: 'SET_PAUSE'
}

export function setSessionLength(data) {
    return {
        type: TimerSettingsActionTypes.SET_SESSION_LENGTH,
        payload: data,
    }
}

export function setBreakLength(data) {
    return {
        type: TimerSettingsActionTypes.SET_BREAK_LENGTH,
        payload: data,
    }
}

export function setPlay(data) {
    return {
        type: ClockActionTypes.SET_PLAY,
        payload: data
    }
}

export function setPause(data) {
    return {
        type: ClockActionTypes.SET_PAUSE,
        payload: data
    }
}