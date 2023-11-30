import { Link } from "react-router-dom"
import AddTodo from "./todos/AddTodo"
import JSCode from "./common/JSCode"

const ReduxToolkit = () => {

  const code1 = `
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todos/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
  `

  const code2 = `
  import { createSlice, nanoid } from "@reduxjs/toolkit";

  const initialState = {
      todos: []
  }
  
  const todoSlice = createSlice({
      name: 'todo',
      initialState,
      reducers: {
          addTodo: (state, action) => {
              const data = {
                  id: nanoid(),
                  text: action.payload
              }
  
              state.todos.push(data)
          },
          removeTodo: (state, action) => {
              state.todos = state.todos.filter((todo) => todo.id !== action.payload)
          }
  
      }
  })
  export const { addTodo, removeTodo } = todoSlice.actions
  export default todoSlice.reducer;
  `

  const code3 = `
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
  `
const code4 = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

`  
  return (
    <>
      <div className="container py-3">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4">
            <AddTodo />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <div>
              <h6>1. Create store.js in src folder</h6>
              <JSCode code={code1} />
            </div>
            <div>
              <h6>2. Create todoSlice.js inside 'src/redux/features/todos' </h6>
              <JSCode code={code2} />
            </div>
            <div>
              <h6>3. Create AddTodo.js inside 'src/components/todos' </h6>
              <JSCode code={code3} />
            </div>
            <div>
              <h6>4. Add Provider inside index.js</h6>
              <JSCode code={code4} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReduxToolkit