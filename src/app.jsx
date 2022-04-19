import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const target = this.state.habits.find((e) => e.id === habit.id);
    // target.count = target.count + 1;
    // const targetIndex = this.state.habits.findIndex((e) => e.id === habit.id);
    // const newHabits = this.state.habits.splice(targetIndex, 1, target);
    // this.setState(newHabits);

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count - 1 < 0 ? 0 : habit.count - 1 };
      } else {
        return item;
      }
    });
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    // 이렇게 하는거랑 같다
    // this.setState({ habits: habits });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // const targetIndex = this.state.habits.findIndex((e) => e.id === habit.id);
    // const newHabits = this.state.habits.splice(targetIndex, 1);
    // this.setState(newHabits);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) return { ...habit, count: 0 };
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.dir("app");
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
