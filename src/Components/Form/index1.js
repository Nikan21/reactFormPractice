import React, { useReducer } from "react";

function reducer(prevState, action) {
  const { name, value } = action;
  if (name === "" || name === undefined) {
    const newState = {
      ...prevState,
      [name]: value,
    };
    return newState;
  }
  return prevState;
}

export default function Form1() {
  const [state, dispatch] = useReducer(reducer, { login: "", pass: "" });

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    dispatch({
      name: name,
      value: value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="login"
        value={state.login}
        onChange={handleChange}
        placeholder="Email Adress"
        required
      />
      <input
        type="password"
        name="pass"
        value={state.pass}
        onChange={handleChange}
        placeholder="Password"
        required
      />
    </form>
  );
}
