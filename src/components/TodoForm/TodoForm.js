import React, {useState} from 'react';

const TodoForm  = () => {
    const [todoItem, setTodoItem] = useState('');

    const handleChanges = e => {
        setTodoItem(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(todoItem);
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