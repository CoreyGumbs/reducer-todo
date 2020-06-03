import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const TodoForm  = ({state, dispatch}) => {
    const [todoItem, setTodoItem] = useState('');
    const [todoTags, setTodoTags] = useState([]);
    const [dueDate, setDueDate] = useState(new Date());

    const handleChanges = e => {
        switch(e.target.name){
            case 'todoItem':
                setTodoItem(e.target.value);
                break;
            case 'todoTags': 
                setTodoTags(e.target.value.split(","));
                break;

            default:
                return e.target.value;
        }
    };

    const handleDateChange = date => {
        setDueDate(date);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            {type: 'ADD_TODO', 
                    payload: {
                        item: todoItem, 
                        tags: todoTags.length !== 0 ? todoTags : ['No Tags Entered.'],
                        dueDate: dueDate
                    }
            }
        );
        setTodoItem('');
        setTodoTags('');
        setDueDate(new Date());
    };

    console.log(dueDate);
    return(
        <form onSubmit={handleSubmit}>
            <label className="todo-form-label" htmlFor="todoItem">Add Todo:</label>
            <input className="todo-form-input" type="text" name="todoItem" value={todoItem} onChange={handleChanges} required />
            <label className="todo-form-label" htmlFor="">Add Tags:</label>
            <input className="todo-form-input" type="text" name="todoTags" value={todoTags} onChange={handleChanges}/>
            <label className="todo-form-label" htmlFor="">Due Date:</label>
            <DatePicker className="todo-form-input" selected={dueDate} onChange={handleDateChange}/>
            <button className="todo-form-btn" type="submit">
                Submit
            </button>
        </form>  
    );
}

export default TodoForm;