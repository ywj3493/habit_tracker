import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.dir("navbar");
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
