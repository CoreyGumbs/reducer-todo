import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';

const TodoItem = ({todo, dispatch}) => {
    const [pastDue, setPastDue] = useState(false);

    useEffect(() => {
        const currentDate = new Date();

        if(currentDate.toLocaleDateString() === todo.dueDate.toLocaleDateString()){
            setPastDue(false);
        }else if(todo.dueDate.valueOf() <= currentDate.valueOf()){
            setPastDue(true);
        }

    }, []);

    return(
        <div onClick={() => dispatch({type: 'TOGGLE_COMPLETED', payload: {id: todo.id}})}>
            <h2>{todo.item}</h2>
           
                {todo.tags.map((tag, idx) => (
                    <h3 key={idx}>{tag}</h3>
                ))}
            {todo.completed &&
                <h4>Completed: {todo.completed === false ? `not completed`: <Moment format={'MMM Do YYYY'}>{todo.completedDate}</Moment>}</h4>
            }

            {!todo.completed && 
                <div>
                    <h4>
                        Due Date: <Moment format={'MMM Do YYYY'}>{todo.dueDate}</Moment>
                    </h4>
                    <h5>Current Status:  {pastDue ? 'overdue' : 'on time'}</h5>
                </div>  
            }        
        </div>
    );
}

export default TodoItem;