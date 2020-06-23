import React, { useState } from 'react';
import Clock from './Clock';
import './styles/timer.css';
import settingsIcon from '../../../../resource/settings.png';
import timerIcon from '../../../../resource/time.png';
import TimerSettings from './TimerSettings';
import { useSelector } from 'react-redux';

const Timer = () => {
    const [isTimerOpen, setIsTimerOpen] = useState(false);
    const [isTimerSettingsOpen, setIsTimerSettingsOpen] = useState(false);

    const sessionLength = useSelector((state) => state.timerSettingsReducer.timerSettings.sessionLength);
    const breakLength = useSelector((state) => state.timerSettingsReducer.timerSettings.breakLength);
    const isPlay = useSelector((state) => state.timerSettingsReducer.clock.isPlay);

    const showTImer = () => {
        setIsTimerOpen(true);
        setIsTimerSettingsOpen(false);
    }
    const timerOpenClose = () => {
        setIsTimerOpen(!isTimerOpen);
    }

    const openTimerSettings = () => {
        setIsTimerSettingsOpen(true);
    }

    return (
        <div className='container'>
            <div>
                <ul className={(isTimerOpen) ? 'timerSettings' : 'timerSettingsHide'}>
                    <li><img className='timerIcon' src={timerIcon}
                        onClick={showTImer}></img></li>
                    <li><img className='settingsIcon' src={settingsIcon}
                        onClick={openTimerSettings}></img></li>
                </ul>
            </div>
            <div >
                <a className='container toggle'
                    onClick={timerOpenClose}
                > {!isTimerOpen && isPlay ? 'VINAY ADD TIME HERE' : 'TIMER'}</a>
            </div>
            <div className='timerContent'>
                {isTimerSettingsOpen && isTimerOpen ? <TimerSettings /> : null}
                {isTimerOpen && !isTimerSettingsOpen ? <Clock minutes={sessionLength - 1} seconds='60' /> : null}
            </div>
        </div>
    );
};

export default Timer;