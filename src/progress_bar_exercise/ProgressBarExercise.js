import React from 'react';
import Exercise from '../exercise/Exercise';
import QuasiEnvironment from './QuasiEnvironment.js';

const ProgressBarExercise = () => {
    return (
        <div className="progress-bar-exercise">
            <Exercise
                solution={<Solution />}
                specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
                title="Progress Bar Exercise"
            />
        </div>
    );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
    return <QuasiEnvironment />;
};
