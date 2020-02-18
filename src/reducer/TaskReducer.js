
import uuid from 'uuid';

export const DataReducer = (state, action) => {

 switch (action.type){

        case 'ADD_TASK':

        return [
               ...state,{
                task:action.task,
                id: uuid()
            }
        ]

        case 'REMOVE_TASK':
            return state.filter(item => item.id != action.id);

            default:
                return state;
    }
}