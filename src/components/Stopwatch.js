import React, { Component, PropTypes } from 'react';

export default class Stopwatch extends Component {
  state = {
    count: 0
  };


  onPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };


  render() {
    return (
      <div className="stopwatch" >
        <h2>Counter</h2>
        <div className="stopwatch-time"> {this.state.count} </div>
          <button onClick={this.onPlus}> + </button>
          <button onClick={this.onMinus}> - </button>
      </div>
    );
  }
}
