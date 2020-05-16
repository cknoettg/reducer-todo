export const initialState =  {

    todos: [
        {
          item: "Learn About Reducers",
          completed: false,
          ID: 3892987589
        },
    
        {
          item: "Reducers Todo 2",
          completed: false,
          ID: 3890000000
        }
      ]

};

export const TodoReducer = function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return { todos: [...state, {item: action.payload, completed: false, id: Date.now()}] }
        default:
            return state
    }
};