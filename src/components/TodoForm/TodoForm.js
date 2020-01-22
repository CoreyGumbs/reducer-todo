import React, {useState} from 'react';

const TodoForm  = ({state, dispatch}) => {
    const [todoItem, setTodoItem] = useState('');
    const [todoTags, setTodoTags] = useState([]);

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

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: {item: todoItem, tags: todoTags}});
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoItem">Add Todo:</label>
                <input type="text" name="todoItem" value={todoItem} onChange={handleChanges} />
                <label htmlFor="">Add Tags:</label>
                <input type="text" name="todoTags" value={todoTags} onChange={handleChanges}/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;