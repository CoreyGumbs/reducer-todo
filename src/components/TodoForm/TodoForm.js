import React, {useState} from 'react';
import DatePicker from 'react-date-picker'

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

    const handleDateChange = e => {
        console.log(e)
        setDueDate(e);
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

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoItem">Add Todo:</label>
                <input type="text" name="todoItem" value={todoItem} onChange={handleChanges} required />
                <label htmlFor="">Add Tags:</label>
                <input type="text" name="todoTags" value={todoTags} onChange={handleChanges}/>
                <label htmlFor="">Due Date:</label>
                <DatePicker value={dueDate} onChange={handleDateChange} format={"MMM-dd-y"}/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;