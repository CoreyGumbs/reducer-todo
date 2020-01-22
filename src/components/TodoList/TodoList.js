import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({list, dispatch}) => {
    console.log(list);
    return(
        <div>
            {list.data.map( todo => (
                <div key={todo.id}>
                    <TodoItem todo={todo} dispatch={dispatch}/>
                </div>
            ))}
        </div>
        );
}

export default TodoList;