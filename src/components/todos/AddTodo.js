import { useState } from "react";
import { addTodo, removeTodo } from "../../redux/features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

const AddTodo = () => {

 const [input, setInput] = useState('');

 const dispatch = useDispatch();
 const todosData = useSelector((state) => state.todos)
 const addTodoHandler = () => {
  setInput('')
  dispatch(addTodo(input));
 }

 const removeTodoHandler = (id) => {
  dispatch(removeTodo(id))
 }

 return (
  <>
   <div>
    <div className="todo-input-control py-3">
     <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
     <button className="btn btn-primary" onClick={addTodoHandler}>Add Todo</button>
    </div>
    <div className="todo-list">
     <ul className="list-group">
      {todosData.map((todo, index) => (
       <li className="list-group-item">
        <span>{todo.text}</span>
        <span className="text-danger cursor-pointer" onClick={() => removeTodoHandler(todo.id)}>REMOVE</span>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </>

 )
}

export default AddTodo;