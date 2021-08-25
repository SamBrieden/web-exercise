import React, { useState, useEffect, useCallback } from 'react';
import './progress-bar.scss';

export default function ProgressBar({ isLoading, breaks = [] }) {
    const breakPoints = [...breaks, 90];
    breakPoints.sort();
    const maxDuration = 15000;
    const breakPointDuration = maxDuration / breakPoints.length;
    const [timeoutID, setTimeoutID] = useState(null);
    const [progress, setProgress] = useState(0);
    const [transitionDuration, setTransitionDuration] =
        useState(breakPointDuration);
    const progressStyles = {
        width: `${100 - progress}%`,
        transitionDuration: `${transitionDuration}ms`,
    };
    const showProgressBar = {
        opacity: isLoading ? '100%' : '0%',
        transitionDelay: !isLoading ? '2700ms' : '0s',
    };

    return (
        <div className="progress-bar-container" style={showProgressBar}>
            <div
                className="progress-indicator-cover"
                style={progressStyles}
            ></div>
            <div className="progress-indicator"></div>
        </div>
    );
}
