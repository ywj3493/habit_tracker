import React, { PureComponent } from "react";

class Habit extends PureComponent {
  //마운트 될 때 : 타이머 시작, 소켓 초기화
  componentDidMount() {
    console.dir(`habit: ${this.props.habit.name} mounted`);
  }

  //마운트 되기 직전 : 타이머 끝, 메모리 정리
  componentWillUnmount() {
    console.dir(`habit: ${this.props.habit.name} will unmounted`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.dir(`habit ${this.props.habit.name}`);
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
