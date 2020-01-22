let id = 1;

export const initialState ={ 
    data: [{
            item: 'first todo',
            tags: [],
            completed: false,
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
                    id: id++,
                    completedDate: ''
                    }
                ]
            }
        default:
            return currentState;
    }
}