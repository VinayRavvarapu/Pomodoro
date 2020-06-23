import React from 'react';
import Slider from '@material-ui/core/Slider';
import './styles/timerSettings.css';
import { useSelector, useDispatch } from 'react-redux';
import { TimerSettingsActionTypes } from '../data/actions';

const TimerSettings = () => {
    const sessionLength = useSelector((state) => state.timerSettingsReducer.timerSettings.sessionLength);
    const breakLength = useSelector((state) => state.timerSettingsReducer.timerSettings.breakLength);

    const dispatch = useDispatch();

    const handleSessionChange = (event, newValue) => {
        dispatch({ type: TimerSettingsActionTypes.SET_SESSION_LENGTH, payload: { sessionLength: newValue } });
    }

    const handleBreakChange = (event, newValue) => {
        dispatch({ type: TimerSettingsActionTypes.SET_BREAK_LENGTH, payload: { breakLength: newValue } });
        console.log(breakLength);
    }

    return (
        <div id='preferences' className='preferences'>
            <h1>Preferences</h1>
            <div className='content'>
                <form>
                    <fieldset>
                        <legend>Sessions</legend>
                        <div className='formGroup'>
                            <div className='field'>
                                <label for="sessionLength">Session length</label>
                                <div className='slider'>
                                    <span className="sliderValue">{sessionLength} minute(s)</span>
                                    <div className='horizontalSlider'>
                                        <Slider value={sessionLength} max={60} onChange={handleSessionChange} aria-labelledby="continuous-slider" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Breaks</legend>
                        <div className='formGroup'>
                            <div className='field'>
                                <label for="breakLength">Break length</label>
                                <div className='slider'>
                                    <span className="sliderValue">{breakLength} minute(s)</span>
                                    <div className='horizontalSlider'>
                                        <Slider value={breakLength} max={15} onChange={handleBreakChange} aria-labelledby="continuous-slider" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default TimerSettings;