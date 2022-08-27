import { useState } from "react"
import React, { Component } from 'react'

class Horloge2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            seconde: 0,
            minute: 0,
            hour: 1
        }
    }

    timer(){
        this.setState({
            seconde: this.state.seconde +1
        });
        if(this.state.seconde == 59){
            this.setState({
                seconde: 0,
                minute: this.state.minute +1
            });
        if (this.state.minute == 59) {
            this.setState({
                minute : 0,
                hour : this.state.hour + 1
            });
        }
        if (this.state.hour == 23) {
            this.setState({
                hour: 0
            });
        }
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => {
            this.timer()
        }, 1000);
    }

    componentWillUnmount(){

    }

  render() {
    return (
        <div className="bg-blue-500 flex text-center ml-96 text-white opacity-90 mt-64 rounded-lg text-xl font-serif ">
            <div className="m-10 p-10 bg-red-900 rounded-md">
                {this.state.hour}
            </div>
            <div className="m-10 p-10 bg-yellow-500 rounded-md">
                {this.state.minute}
            </div>
            <div className="m-10 p-10 bg-pink-600 rounded-md">
                {this.state.seconde}
            </div>
        </div>
    )
  }
}

export default Horloge2