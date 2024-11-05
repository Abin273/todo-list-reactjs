import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

function CompletedTodo({ checkToggle, todos, deleteToggle, editToggle }) {
    return (
        <div className="todo-app">
            <h1>Completed Task</h1>

            {todos.map(({ id, task, checked, deleted }) => {
                if (!deleted && checked) {
                    return (
                        <div className={"todo-row"} key={id}>
                            <div onClick={() => checkToggle(id)}>
                                {checked ? (
                                    <ImCheckboxChecked />
                                ) : (
                                    <ImCheckboxUnchecked />
                                )}
                            </div>
                            <div>{task}</div>
                            <div className="icons">
                                <RiCloseCircleLine
                                    onClick={() => deleteToggle(id)}
                                    className="delete-icon"
                                />
                                <TiEdit
                                    onClick={() => editToggle(id)}
                                    className="edit-icon"
                                />
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default CompletedTodo;
