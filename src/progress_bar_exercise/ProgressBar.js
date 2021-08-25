import React, { useState, useEffect, useCallback } from 'react';
import './progress-bar.scss';

export default function ProgressBar({ isLoading, breaks = [] }) {
    const breakPoints = [...breaks, 90];

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
