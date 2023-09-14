import PropTypes from "prop-types";
import { useState } from "react";
import uuid from "react-uuid";
import "./Form.css";

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const changeInputHandler = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      return;
    }

    const task = {
      id: uuid(),
      text: inputValue,
      done: false,
    };

    addTask(task);
    setInputValue("");
  };
  return (
    <>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => changeInputHandler(e)}
        />
        <button type="submit">Add task</button>
      </form>
      {error && <p className="error">Please add a text</p>}
    </>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
