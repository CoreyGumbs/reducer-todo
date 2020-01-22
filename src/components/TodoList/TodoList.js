import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({list, dispatch}) => {

    const clearCompletedTodos = () => {
        dispatch({type: 'CLEAR_COMPLETED_TODO', payload: false})
    }
    
    return(
        <div className="todo-list-container">
            {list.data.map( todo => (
                <div key={todo.id}>
                    <TodoItem uniqueID={todo.id}todo={todo} dispatch={dispatch}/>
                </div>
            ))}
            {list.data.length > 0 && 
                <div className="clear-btn-container">
                    <button className="clear-btn" onClick={clearCompletedTodos}>
                        Clear Completed
                    </button>
                </div>
            }
            
        </div>
        );
}

export default TodoList;