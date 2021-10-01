import React, { Component } from "react";
import Button from "../Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      pass: "",
      check: false,
    };

  }


  handleChange = (event) => {
    const {
      target: { type, checked, value, name },
    } = event;
    const calcValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: calcValue,
    });

    console.log("tsad");
  };

  handleSubmit = (event) => {
    alert("Отправленное имя: " + this.state.login);
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="input"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="login"
          id="login"
          value={this.state.login}
          onChange={this.handleChange}
          placeholder="Email Adress"
          required
        />
        <input
          type="password"
          name="pass"
          id="pass"
          value={this.state.pass}
          onChange={this.handleChange}
          placeholder="Password"
          required
        />
        <div className="checkAndLink">
          <input
            type="checkbox"
            name="check"
            id="check"
            value={this.state.check}
            onChange={this.handleChange}
            required
          />
          <a href="https://www.youtube.com/">Forgot Password</a>
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
