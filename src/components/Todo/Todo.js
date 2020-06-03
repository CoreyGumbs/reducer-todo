import React, {useReducer} from 'react';

import {initialState, todoReducer} from '../../reducers/todoReducer';

import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    return(
        <div className="todo-container">
            <div className="todo-form-container">
                <TodoForm state={state} dispatch={dispatch} />
            </div>
            <TodoList list={state} dispatch={dispatch} />
        </div>
    )
}

export default Todo;