import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Todo from "./components/Todo";
import CompletedTodo from "./components/CompletedTodo";
import RemovedTodo from "./components/RemovedTodo";
import {
    addItemToLocalStorage,
    getItemFromLocalStorage,
} from "./utils/localStorage";
import { LOCAL_STORAGE_KEYS } from "./utils/constants";
import "./App.css";

function App() {
    const [todos, setTodos] = useState(
        getItemFromLocalStorage(LOCAL_STORAGE_KEYS.TODOS) || []
    );
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = (e) => {
        e.preventDefault();
        if (newTodo === "") {
            return;
        }

        let newTodos = [
            {
                id: Date.now(),
                key: uuidv4(),
                task: newTodo,
                checked: false,
                deleted: false,
            },
            ...todos,
        ];
        setTodos(newTodos);

        addItemToLocalStorage(LOCAL_STORAGE_KEYS.TODOS, newTodos);
        setNewTodo("");
    };

    const editToggle = async (id) => {
        const { value: editedTask } = await Swal.fire({
            title: "Rename Task",
            input: "text",
            inputValue: todos.find((data) => data.id === id).task,
        });

        if (editedTask) {
            let newTodos = todos.filter((data) => {
                if (data.id === id) {
                    data.task = editedTask;
                }
                return data;
            });

            setTodos(newTodos);
            addItemToLocalStorage(LOCAL_STORAGE_KEYS.TODOS, newTodos);
        }
    };

    const deleteToggle = (id) => {
        let newTodos = todos.filter((todo) => {
            if (todo.id === id) {
                return (todo.deleted = !todo.deleted);
            }
            return todo;
        });

        setTodos(newTodos);
        addItemToLocalStorage(LOCAL_STORAGE_KEYS.TODOS, newTodos);
    };

    const checkToggle = (id) => {
        let newTodos = todos.filter((todo) => {
            if (todo.id === id) {
                todo.checked = !todo.checked;
            }
            return todo;
        });

        setTodos(newTodos);
        addItemToLocalStorage(LOCAL_STORAGE_KEYS.TODOS, newTodos);
    };

    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "350%",
                    marginTop: "1em",
                }}
            >
                Todo App
            </h1>
            <div className="row">
                <Todo
                    addNewTask={addNewTask}
                    todos={todos}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    checkToggle={checkToggle}
                    editToggle={editToggle}
                    deleteToggle={deleteToggle}
                />

                <CompletedTodo
                    checkToggle={checkToggle}
                    todos={todos}
                    editToggle={editToggle}
                    deleteToggle={deleteToggle}
                />
                <RemovedTodo
                    todos={todos}
                    editToggle={editToggle}
                    deleteToggle={deleteToggle}
                />
            </div>
        </>
    );
}

export default App;
