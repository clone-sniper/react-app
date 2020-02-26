import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : (counters[index].value = 0);
    this.setState({ counters });
  };

  handleAdd = () => {
    let counters = [...this.state.counters];
    let counter = { id: 0, value: 0 };
    const index = counters.map(c => c.id);
    for (let x = 1; x <= index.length + 1; x++) {
      if (!index.includes(x)) {
        counter.id = x;
        break;
      }
    }
    counters = [...counters, counter];
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          uniqueCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            key={this.state.counters.id}
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrease={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </main>
      </div>
    );
  }
}

export default App;
