export const initialState ={ 
    data: [{
            item: 'first todo',
            completed: false,
             id: Date.now()
    }]
};

export const todoReducer = (currentState, action) => {

    switch(action.type){
        case 'ADD_TODO':
            return {
                data: [
                    ...currentState.data,
                    {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                    }
                ]
            }
        default:
            return currentState;
    }
}