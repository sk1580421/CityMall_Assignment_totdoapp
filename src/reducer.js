export const initialState = {
    store: [],
    isEditing: {
        flag: 'false',
        id: ''
    }
}

const reducer = (state, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "Add_work":
            return {
                ...state,
                store: [...state.store, action.item]
            };

        case "Remove_work":
            return {
                ...state,

                store: state.store.filter(item => item.id !== action.id)


            };
        case "Edit_work":
            return {
                ...state,
                isEditing: action.isEditing
                // store: state.store.map(item => {
                //     if (item.id === action.id) {
                //         return {
                //             ...item,
                //             work: action.work
                //         }
                //     }
                //     return item;
                // })


            }
        case "final_edit":
            console.log(action.id)
            return {
                ...state,

                store: state.store.map(item => {
                    console.log(item.id)
                    if (item.id === action.id) {
                        return {
                            ...item,
                            work: action.work
                        }
                    }
                    return item;
                }),
                isEditing: {
                    flag: 'false',
                    id: ''
                }



            }



        default:
            return state;
    }
};

export default reducer;