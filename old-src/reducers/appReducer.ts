let initialState: InitialAppStateType = {}

const appReducer = (state: any = initialState, action: any): InitialAppStateType => {
    switch (action.type) {
        case 'xxx':
            return {
                ...state,
            }
        default:
            return state
    }
}
// Action Creators

//Thunks

//Types

type InitialAppStateType = {}

export default appReducer
