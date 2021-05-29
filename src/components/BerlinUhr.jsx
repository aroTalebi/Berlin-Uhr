import React, { Component } from 'react';
import {get5HoursLights,get1HoursLights,get5MinutesLights,get1MinutesLights} from './service/lights';
import Seconds from './seconds';
import Hours from './hours';
import Minutes from './minutes';


class BerlinUhr extends Component {

    state = {
        counters5LightsHours: get5HoursLights(),                    //get '5 lights' Hours
        counters1LightsHours: get1HoursLights(),                    //get '1 lights' Hours
        counters5LightsMinutes: get5MinutesLights(),                //get '5 lights' Minutes
        counters1LightsMinutes: get1MinutesLights()                 //get '1 lights' Minutes
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.handleMinutesLight(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleAllMinReset = () => {                                                               //all "5 minutes lights" off  
        const counters5LightsMinutes = this.state.counters5LightsMinutes.map(counter => {
            counter.light = 0;
            return counter;
        });

        const counters1LightsMinutes = this.state.counters1LightsMinutes.map(counter => {
            counter.light = 0;
            return counter;
        });
        this.setState({ counters5LightsMinutes, counters1LightsMinutes });
    }

    handleAllHoursReset = () => {                                                               //all "5 Hours lights" off
        const counters5LightsHours = this.state.counters5LightsHours.map(counter => {
            counter.light = 0;
            return counter;
        });

        const counters1LightsHours = this.state.counters1LightsHours.map(counter => {
            counter.light = 0;
            return counter;
        });
        this.setState({ counters5LightsHours, counters1LightsHours });
    }


    handleMinutesLight = () => {                                                                 //set Berlin-clock
        const { hours, minutes } = this.props.handleTime;

        const counters5LightsHours = [...this.state.counters5LightsHours];                       //get "5 hours" lights
        const counters1LightsHours = [...this.state.counters1LightsHours];                       //get "1 hours" lights
        const counters5LightsMinutes = [...this.state.counters5LightsMinutes];                   //get "5 minutes" lights
        const counters1LightsMinutes = [...this.state.counters1LightsMinutes];                   //get "1 minutes" lights

        const counter5Hours = Math.floor(hours / 5);
        const counter1Hours = hours % 5;

        const counter5Minutes = Math.floor(minutes / 5);
        const counter1Minutes = minutes % 5;

        if (minutes === 0) {                                                                    //if minutes '00' all minutes lights off
            this.handleAllMinReset();
        }

        if (hours === 0) {                                                                      //if hours '00' all hours lights off
            this.handleAllHoursReset();
        }

        for (var hrc5 = 0; hrc5 < counter5Hours; hrc5++) {                                      //set "5 lights" hours from brlin-oclock
            counters5LightsHours[hrc5].light = 1;
            this.setState({ counters5LightsHours });
            for (var hrc1 = 0; hrc1 < 4; hrc1++) {
                counters1LightsHours[hrc1].light = 0;
                this.setState({ counters1LightsHours });
            }
        }

        for (var hrc = 0; hrc < counter1Hours; hrc++) {                                         //set "1 lights" hours from brlin-oclock
            counters1LightsHours[hrc].light = 1;
            this.setState({ counters1LightsHours });
        }

        for (var min5 = 0; min5 < counter5Minutes; min5++) {                                    //set "5 lights" minutes from brlin-oclock
            counters5LightsMinutes[min5].light = 1;
            this.setState({ counters5LightsMinutes });
            for (var min1 = 0; min1 < 4; min1++) {
                counters1LightsMinutes[min1].light = 0;
                this.setState({ counters1LightsMinutes });
            }
        }

        for (var min = 0; min < counter1Minutes; min++) {                                       //set "1 lights" minutes from brlin-oclock
            counters1LightsMinutes[min].light = 1;
            this.setState({ counters1LightsMinutes });
        }
    }

    render() {
        const { seconds, hours, minutes } = this.props.handleTime;
        const { counters5LightsHours, counters1LightsHours, counters5LightsMinutes, counters1LightsMinutes } = this.state;

        return (
            <div className="berlin-uhr">
                <div>
                    <Seconds
                        handleSeconds={seconds}
                    />
                </div>
                <div>
                    <Hours
                        counters5LightsHours={counters5LightsHours}
                        counters1LightsHours={counters1LightsHours}
                        handleHours={hours}
                    />
                </div>
                <div>
                    <Minutes counters5LightsMinutes={counters5LightsMinutes}
                        counters1LightsMinutes={counters1LightsMinutes}
                        handleMinutes={minutes}
                    />
                </div>
            </div>
        );
    }
}

export default BerlinUhr;