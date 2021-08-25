import React, { useEffect, useState } from 'react';
import './quasi-environment.scss';
import ProgressBar from './ProgressBar.js';

export default function QuasiEnvironment() {
    const breakPoints = [20, 50, 70, 55, 33];
    const [isLoading, setIsLoading] = useState(false);
    const [isStartDisabled, disableStart] = useState(false);
    const [isEndDisabled, disableEnd] = useState(true);
    const [buttonCopy, setbuttonCopy] = useState('START REQUEST');
    const [startClasses, setStartClasses] = useState('request-button');
    const [terminateClasses, setTerminateClasses] = useState(
        'terminate request-button disabled clicked'
    );

    return (
        <>
            <div>
                <div className="quasi-navbar"></div>
                <ProgressBar isLoading={isLoading} breaks={breakPoints} />
            </div>
            <div className="request-module">
                <button
                    onClick={handleRequestStart}
                    className={startClasses}
                    disabled={isStartDisabled}
                >
                    {buttonCopy}
                </button>
                <button
                    onClick={handleRequestTermination}
                    disabled={isEndDisabled}
                    className={terminateClasses}
                >
                    FINISH REQUEST
                </button>
            </div>
        </>
    );
}
