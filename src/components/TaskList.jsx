import PropTypes from "prop-types";
import Task from "./Task";

import "./TaskList.css";

const TaskList = ({ tasks, checkHandler, deleteHandler }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TaskList;
