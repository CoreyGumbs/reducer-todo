let id = 1;

export const initialState ={ 
    // data: []
    data: [{
            item: 'first todo',
            tags: ['music', 'work', 'play'],
            completed: false,
            completedDate: 'not completed',
            dueDate: new Date('2020/01/10'),
            id: id++
    }]
};

export const todoReducer = (currentState, action) => {

    switch(action.type){
        case 'ADD_TODO':
            return {
                data: [
                    ...currentState.data,
                    {
                    item: action.payload.item,
                    tags: action.payload.tags,
                    completed: false,
                    completedDate: 'not completed',
                    dueDate: action.payload.dueDate,
                    id: id++
                    }
                ]
            }
        case 'TOGGLE_COMPLETED':
            return {
                data: [
                    ...currentState.data.map( todo => {
                        if(todo.id === action.payload.id){
                            todo.completed = !todo.completed
                            todo.completedDate = Date.now()
                        }
                        return todo;
                    })
                ]     
            }
        case 'CLEAR_COMPLETED_TODO':
            return {
                data: [
                    ...currentState.data.filter( todo => todo.completed === action.payload)
                ]
            }

        default:
            return currentState;
    }
}