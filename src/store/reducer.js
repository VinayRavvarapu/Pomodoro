import { combineReducers } from 'redux';
import timerSettings from '../app/modules/timer/data';

export default combineReducers({
    ['timerSettingsReducer']: timerSettings.timerReducer,
})