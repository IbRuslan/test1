
const initialState = {
    initialize: false
}
export type AppState  = typeof initialState

export type ActionAppType =
    | ReturnType<typeof setInitializeApp>

export const appReducer = (state: AppState = initialState, action: ActionAppType): AppState => {
    switch (action.type) {
        case "SET-INITIALIZE":
            return {...state, initialize: action.status}
        default:
            return state
    }
}


export const setInitializeApp = (status: boolean) => (
    {type: 'SET-INITIALIZE', status} as const
)