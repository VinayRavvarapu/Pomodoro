import React, { useState } from 'react';
import './styles/TopBar.css';
import focusBoosterTextLogo from  '../../../../../resource/focus-booster-logo.png';
import focusBoosterIcon from '../../../../../resource/focus-booster-icon.png';


function TopBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className='logoBtn'>
                <div className='logo'>
                    <a href='#'>
                        <img className='focusBoosterIcon' src={focusBoosterIcon} alt='pomodoro-icon'>
                        </img>
                        <img className='focusBoosterTextLogo' src={focusBoosterTextLogo} alt='pomodoro-icon'>
                        </img>
                    </a>
                </div>

                <div className='btn' onClick={handleMenuClick}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>


            <ul className={isOpen ? 'showNav' : undefined}>
                <li><a href='#'>Timesheets</a></li>
                <li><a href='#'>Reports</a></li>
            </ul>
        </nav >
    );
}

export default TopBar;