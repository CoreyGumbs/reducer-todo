import React from 'react';

const TodoItemTags = ({todo,tag}) => {
    return (
        <>

            <button className={todo.completed ? 'todo-tags-btn-completed': 'todo-item-tags-btn'} >
                #{tag}
            </button>
        </>
    );
}

export default TodoItemTags;