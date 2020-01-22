import React from 'react';
import Moment from 'react-moment';

const TodoItem = ({todo, dispatch}) => {
    return(
        <div onClick={() => dispatch({type: 'TOGGLE_COMPLETED', payload: {id: todo.id}})}>
            <h2>{todo.item}</h2>
           
                {todo.tags.map((tag, idx) => (
                    <h3 key={idx}>{tag}</h3>
                ))}

            <h4>Completed: {todo.completed === false ? `not completed`: <Moment format={'MMM Do YYYY'}>{todo.completedDate}</Moment>}</h4>
           
        </div>
    );
}

export default TodoItem;