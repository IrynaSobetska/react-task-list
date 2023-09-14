import PropTypes from "prop-types";
import "./Task.css";

const Task = ({ task, checkHandler, deleteHandler }) => {
  return (
    <li key={task.id} className="task">
      <div className={task.done ? "done" : "notDone"}>{task.text}</div>
      <div className="buttons">
        <button onClick={() => checkHandler(task.id)}>
          {task.done ? "Checked" : "Check"}
        </button>
        <button onClick={() => deleteHandler(task.id)}>Delete</button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Task;
