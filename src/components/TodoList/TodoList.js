import React from 'react';


const TodoList = ({list, dispatch}) => {
    console.log(list);
    return(
        <div>
            {list.data.map( todo => (
                <div key={todo.id}>
                    {todo.id}
                    {todo.item}
                </div>
            ))}
        </div>
        );
}

export default TodoList;