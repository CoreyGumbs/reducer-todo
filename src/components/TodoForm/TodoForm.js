import React, {useState} from 'react';

const TodoForm  = ({state, dispatch}) => {
    const [todoItem, setTodoItem] = useState('');

    const handleChanges = e => {
        setTodoItem(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: todoItem})
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoItem" value={todoItem} onChange={handleChanges} />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;