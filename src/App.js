import Swal from "sweetalert2";
import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css"


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('')

  const addNewTask = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return
    }

    let newTodos = [
      { id: Date.now(), task: newTodo, checked: false, deleted: false }, ...todos
    ]
    setTodos(newTodos);
    setNewTodo("");
  }

  const editToggel = async (id) => {

    const { value: editedTask } = await Swal.fire({
      title: 'Rename Task',
      input: 'text',
      inputValue: todos.find((data)=>data.id ===id).task,
    })

    if (editedTask) {
      let newTodos =  todos.filter((data)=>{
        if(data.id === id){
          data.task = editedTask
        }
        return data
      })

      setTodos(newTodos);
    }
  }

  const deleteToggle = (id) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return todo.deleted = !todo.deleted
      }
      return todo
    })

    setTodos(newTodos);

  }

  const checkToggle = (id) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return todo.checked = !todo.checked
      }
      return todo
    })

    setTodos(newTodos);
  }




  return (
    <>
      <div className="row">
        <Todo addNewTask={addNewTask} todos={todos} newTodo={newTodo} setNewTodo={setNewTodo} checkToggle={checkToggle} editToggel={editToggel} deleteToggle={deleteToggle} />
      </div>
    </>
  );
}

export default App;
