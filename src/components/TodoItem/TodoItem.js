import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';

import TodoItemTags from './TodoItemTags';

const TodoItem = ({uniqueID, todo, dispatch}) => {
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
        <div className="todo-item-container" onClick={() => dispatch({type: 'TOGGLE_COMPLETED', payload: {id: todo.id}})}>
            <h2 className="todo-item-heading"><span className="todo-item-heading-youdo">YouDo: </span>{todo.item}</h2>

            {todo.tags.length > 0 &&
            <div className={todo.completed ? " todo-tags-completed" : "todo-tags-container" }>
               {todo.tags.map((tag, idx) => <TodoItemTags tag={tag} key={idx}/>)}
            </div>
            }
            
            {todo.completed &&
                <div className="todo-item-status">    
                    <h4 className="todo-item-status-heading">
                        Completed on    
                        <Moment format={'MMM Do YYYY'} className="todo-item-date">
                            {todo.completedDate}
                         </Moment>
                    </h4>
                </div>
            }
    
            {!todo.completed && 
                <div className="todo-item-status">
                    <h4 className="todo-item-status-heading">
                        Due Date on 
                        <Moment format={'MMM Do YYYY'} className="todo-item-date">
                            {todo.dueDate}
                        </Moment>
                         & Is {pastDue ? <span className="todo-item-overdue"> Currently Overdue </span> : <span className="todo-item-ontime">Currently Being Worked On</span>}
                    </h4>
                </div>
            }      
        </div>
    );
}

export default TodoItem;