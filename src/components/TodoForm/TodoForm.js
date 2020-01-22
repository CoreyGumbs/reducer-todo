import React, {useState} from 'react';

const TodoForm  = () => {

    return(
        <div>
            <form onSubmit="">
                <input type="text"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;