import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({
    addNewTask,
    newTodo,
    setNewTodo,
    todos,
    checkToggle,
    editToggle,
    deleteToggle,
}) {
    return (
        <div className="todo-app">
            <div className="todo-form" onSubmit={addNewTask}>
                <form>
                    <input
                        type="text"
                        name="text"
                        value={newTodo}
                        placeholder="Add a todo"
                        className="todo-input"
                        onChange={(e) => {
                            setNewTodo(e.target.value);
                        }}
                    />

                    <button className="todo-button">Add Task</button>
                </form>

                {todos.map((data) => {
                    // if(data.checked) return null;
                    if (!data.deleted && !data.checked) {
                        return (
                            <div className="todo-row" key={data.key}>
                                <div
                                    onClick={() => {
                                        checkToggle(data.id);
                                    }}
                                >
                                    {" "}
                                    {data.checked ? (
                                        <ImCheckboxChecked />
                                    ) : (
                                        <ImCheckboxUnchecked />
                                    )}{" "}
                                </div>
                                <div>{data.task}</div>
                                <div className="icons">
                                    <TiEdit
                                        onClick={() => {
                                            editToggle(data.id);
                                        }}
                                        className="edit-icon"
                                    />
                                    <RiCloseCircleLine
                                        onClick={() => deleteToggle(data.id)}
                                        className="delete-icon"
                                    />
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default Todo;
