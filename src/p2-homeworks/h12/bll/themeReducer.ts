
export type ThemeType = 'inexpressible' | 'dark' | 'red' | 'france'

type initStateType = {
    color:ThemeType
}
const initState: initStateType = {
    color:'dark'
};

export const themeReducer = (state = initState, action: changeThemeCType):initStateType => {
    switch (action.type) {
        case "CHANGE_COLOR": {
            return {
                ...state, color: action.key}
        }
        default:
            return state;
    }
};

type changeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (key:ThemeType) => {
    return {type:'CHANGE_COLOR', key}
};