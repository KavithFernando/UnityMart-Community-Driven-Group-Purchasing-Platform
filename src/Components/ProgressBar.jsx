
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
    return (
        <div className='progressbar'>
            <div className='profrasbarfil' style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
