import React from 'react';

const TodoItemTags = ({tag}) => {
    return (
        <>

            <button className='todo-item-tags-btn'>
                #{tag}
            </button>
        </>
    );
}

export default TodoItemTags;