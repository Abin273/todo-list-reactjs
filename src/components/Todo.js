import React from "react";
import {ImCheckboxChecked ,ImCheckboxUnchecked} from "react-icons/im"
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';


function Todo({ addNewTask, newTodo, setNewTodo,todos ,checkToggle ,deleteToggle,editToggel }) {
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

                    <button className="todo-button">
                        Add Task
                    </button>
				</form>

                {todos.map((data)=>{
                    // if(data.checked) return null;
                    if(data.deleted) return null;

                    return(
                        <div className="todo-row" key={uuidv4()}>
                            <div onClick={()=>{checkToggle(data.id)}} > {data.checked ? <ImCheckboxChecked />:  <ImCheckboxUnchecked />} </div>
                            <div>{data.task}</div>
                            <div className="icons">
                                <TiEdit onClick={()=>{editToggel(data.id)}} className="edit-icon"/>
                                <RiCloseCircleLine onClick={()=>deleteToggle(data.id)} className="delete-icon"/>
                            </div>

                        </div>
                    )
                })}
			</div>
		</div>
	);
}

export default Todo;
