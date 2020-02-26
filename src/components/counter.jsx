import React, { Component } from "react";

export default class Counter extends Component {
  style = {
    fontSize: "50px",
    fontWeight: "bold"
  };

  render() {
    const { counter, onIncrease, onDecrease, onDelete } = this.props;
    return (
      <div>
        <span style={this.style}>ID:{counter.id} </span>

        <button
          onClick={() => onIncrease(counter)}
          className="btn-secondary btn-sm"
        >
          +
        </button>

        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => onDecrease(counter)}
          className="btn-seconday btn-sm"
        >
          -
        </button>

        <button
          onClick={() => onDelete(counter.id)}
          className="btn-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? 0 : count;
  }
}
