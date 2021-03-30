import {UserType} from "../HW8";

type ActionType = {  type:  'sort', payload: 'down' | 'up' } | { type:  'check', payload: number }


export const homeWorkReducer = (state:  UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up' ){
                return [...state].sort((a,b) => a.name > b.name ? 1 : -1)
            } else if(action.payload === 'down'){
                return [...state].sort((a,b) => a.name > b.name ? -1 : 1)
            }
            return state
        }
        case 'check': {
          return [...state].filter(a => a.age > action.payload)
        }
        default: return state
    }
}

