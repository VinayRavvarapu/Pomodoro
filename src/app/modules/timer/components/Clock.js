import React, { useState, useEffect } from 'react';
import './styles/clock.css';
import './styles/clock.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { useSelector, useDispatch } from 'react-redux';
import { ClockActionTypes } from '../data/actions';
import SVGCircle from './SVGCircle';
import clockTicking from '../../../../resource/clock-ticking.mp3'

const Clock = (props) => {
    const [minutes, setMinutes] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);
    const isPlay = useSelector((state) => state.timerSettingsReducer.clock.isPlay);
    const isPause = useSelector((state) => state.timerSettingsReducer.clock.isPause);

    const dispatch = useDispatch();

    const tick = () => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
        }
    }

    useEffect(() => {
        if (!minutes && !seconds) {
            const { minutes, seconds } = props;
            setMinutes(minutes);
            setSeconds(seconds);
        }
        const interval = setInterval(() => {
            if (isPlay) {
                tick();
            }
        }, 1000);

        return (() => {
            clearInterval(interval);
        })
    }, [props, minutes, seconds, isPlay]);

    const handlePauseClick = () => {
        dispatch({ type: ClockActionTypes.SET_PAUSE, payload: { isPause: true } });
    }

    const handlePlayClick = () => {
        dispatch({ type: ClockActionTypes.SET_PLAY, payload: { isPlay: true } });
    }

    // From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const mapNumber = (number, in_min, in_max, out_min, out_max) => {
        return (
            ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    }

    // Mapping the date values to radius values
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    return (
        <div className='clockContainer'>
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                <PauseIcon fontSize='large' style={{ cursor: 'pointer' }} className={isPlay ? 'showPlay' : 'hidePlay'} onClick={handlePauseClick} />
                <PlayArrowIcon fontSize='large' style={{ cursor: 'pointer' }} className={isPause ? 'showPause' : 'hidePause'} onClick={handlePlayClick} />
                {minutes && (
                    <div className="countdown-item">
                        <SVGCircle radius={minutesRadius} />
                        {minutes}
                        <span>minutes</span>
                    </div>
                )}
                {(
                    <div className="countdown-item">
                        <SVGCircle radius={secondsRadius} />
                        {seconds}
                        <span>seconds</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Clock;