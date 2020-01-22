import React, {useReducer} from 'react';

import {initialState, todoReducer} from '../../reducers/todoReducer';

import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    console.log(state);
    return(
        <div className="todo-container">
            <div className="todo-form-container">
                <TodoForm state={state} dispatch={dispatch} />
            </div>
            <div className="todo-list-container">
                <TodoList list={state} dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Todo;