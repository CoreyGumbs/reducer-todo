import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({list, dispatch}) => {

    const clearCompletedTodos = () => {
        dispatch({type: 'CLEAR_COMPLETED_TODO', payload: false})
    }
    
    console.log(list);
    return(
        <div>
            {list.data.map( todo => (
                <div key={todo.id}>
                    <TodoItem todo={todo} dispatch={dispatch}/>
                </div>
            ))}
            <button onClick={clearCompletedTodos}>
                    Clear Completed
            </button>
        </div>
        );
}

export default TodoList;