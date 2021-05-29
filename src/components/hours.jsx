import React, { Component } from 'react';

class Hours extends Component {

    getColorLight = counter => {                                //if light off background white and light on background red
        let classes = "box-4-lights bg-";
        classes += (counter.light === 0) ? "white" : "danger";
        return classes;
    }

    render() {
        const { counters5LightsHours, counters1LightsHours } = this.props;

        return (
            <React.Fragment>
                {/* Berlin Uhr 5 hours lights */}
                <ul className="float-left mb-1">
                    {counters5LightsHours.map(counter => (
                        <li
                            key={counter.id}
                            className={this.getColorLight(counter)}
                        ></li>
                    ))}
                </ul>
                {/* Berlin Uhr 1 hours lights */}
                <ul className="float-left mb-1">
                    {counters1LightsHours.map(counter => (
                        <li
                            key={counter.id}
                            className={this.getColorLight(counter)}
                        ></li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Hours;