import React from 'react';

const Seconds = (props) => {
    let seconds = props.handleSeconds;                                           //get seconds
    let secondsLightClasss = "box-seconds bg-"
    secondsLightClasss += ((seconds % 2) === 0) ? "light" : "warning";           //if seconds even background light , and if second odd gold

    return (
        <div
            className={secondsLightClasss}
        >
        </div>
    );
}

export default Seconds;