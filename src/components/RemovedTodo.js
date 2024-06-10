import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function RemovedTodo({ todos, deleteToggle }) {
	return (
		<div className="todo-app">
			<h1>removed Task</h1>
			{console.log(todos)}
			{todos.map(({ id, task, deleted }) => {
				if (deleted){

          return (
            <div className={"todo-row"} key={id}>
              <div style={{ margin: "auto" }}>{task}</div>
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => deleteToggle(id)}
                  className="delete-icon"
                />
              </div>
            </div>
          );
        }else{
          return null;
        }
			})}
		</div>
	);
}

export default RemovedTodo;
