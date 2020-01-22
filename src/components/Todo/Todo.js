import React, {useReducer} from 'react';

import {initialState, todoReducer} from '../../reducers/todoReducer';

import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state, dispatch);
   
    return(
        <div className="todo-container">
            <div className="todo-form-container">
                <TodoForm />
            </div>
            <div className="todo-list-container">
                <TodoList />
            </div>
        </div>
    )
}

export default Todo;