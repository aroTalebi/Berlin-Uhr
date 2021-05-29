import React, { Component } from 'react';

class Minutes extends Component {

    getColorLight = counter => {                                //if light off background white and light on background red
        let classes = "box-4-lights bg-";
        classes += (counter.light === 0) ? "white" : "warning";
        return classes;
    }

    getColor5MinLight = counter => {                                //if light off background white and light on background red
        let classes = "minutes-5-lights bg-";
        const id = counter.id;
        if ((id % 3) === 0) {
            classes += (counter.light === 0) ? "white" : "danger";
        } else {
            classes += (counter.light === 0) ? "white" : "warning";
        }

        return classes;
    }

    render() {
        const { counters5LightsMinutes, counters1LightsMinutes } = this.props;
        return (
            <React.Fragment>
                {/* Berlin Uhr 5 Minutes lights */}
                <ul className="float-left mb-1">
                    {counters5LightsMinutes.map(counter => (
                        <li
                            key={counter.id}
                            className={this.getColor5MinLight(counter)}
                        ></li>
                    ))}
                </ul>

                {/* Berlin Uhr 1 hours lights */}
                <ul className="float-left">
                    {counters1LightsMinutes.map(counter => (
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

export default Minutes;