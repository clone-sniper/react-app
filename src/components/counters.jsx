import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-sm m-2 btn-primary">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrease={this.props.onIncrease}
            onDecrease={this.props.onDecrease}
          ></Counter>
        ))}
        <button onClick={this.props.onAdd} className="btn-sm m-2 btn-primary">
          Add
        </button>
      </div>
    );
  }
}

export default Counters;
