const LOADING_TYPE = 'LOADING_TYPE'

const initState = {
    loading:false
}
export type initStateType = {
    loading:boolean
}
export const loadingReducer = (state:initStateType = initState, action: DispatchType): initStateType => { // fix any
    switch (action.type) {
        case LOADING_TYPE: {
            return {...state,loading: !state.loading }
        }
        default: return state
    }
}

export type DispatchType = loadingACType

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
   return {type: LOADING_TYPE} as const
}