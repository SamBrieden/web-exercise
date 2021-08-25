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
    const handleLoading = useCallback(() => {
        const resetDuration = () => {
            setTimeout(() => setTransitionDuration(breakPointDuration), 100);
        };
        const handleNextBreakPoint = (i) => {
            if (timeoutID) clearTimeout(timeoutID);
            setProgress(breakPoints[i]);
            if (i < breakPoints.length - 1) {
                setTimeoutID(
                    setTimeout(() => {
                        handleNextBreakPoint(i + 1);
                    }, breakPointDuration)
                );
            }
        };
        const handleProgressTermination = () => {
            setTransitionDuration(1000);
            setProgress(100);
            if (timeoutID) clearTimeout(timeoutID);
            setTimeoutID(
                setTimeout(() => {
                    setProgress(0);
                    setTransitionDuration(0);
                    setTimeoutID(null);
                    resetDuration();
                }, 2900)
            );
        };
        if (isLoading && !progress) {
            if (timeoutID) clearTimeout(timeoutID);
            handleNextBreakPoint(0);
        } else if (!isLoading && progress) {
            handleProgressTermination();
        }
    }, [isLoading, progress]);

    useEffect(() => handleLoading(), [handleLoading]);

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
