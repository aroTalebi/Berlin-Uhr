import React from 'react';
import BerlinUhr from './BerlinUhr';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            seconds: new Date().getSeconds(),
            hours: new Date().getHours(),
            minutes: new Date().getMinutes() 
        });
    }

    render() {
        const time = this.state;
        return (
            <React.Fragment>
                {/*get Berlin clock hier*/}
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <BerlinUhr handleTime={time} />
                    </div>
                    <div className="col-lg-4"></div>
                </div>

                {/*get digital clock hier*/}
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <h5 className="digiClock">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                    <div className="col-lg-4"></div>
                </div>

            </React.Fragment>
        );
    }
}

export default Clock;