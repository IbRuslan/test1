
const initialState = {
    preloader: false
}
export type AppState  = typeof initialState

export const appReducer = (state: AppState = initialState, action: ActionAppType): AppState => {
    switch (action.type) {
        case "SET-STATUS":
            return {...state, preloader: action.status}
        default:
            return state
    }
}

export type ActionAppType =
    | setStatusAppAT

export type setStatusAppAT = ReturnType<typeof setStatusAppAC>

export const setStatusAppAC = (status: boolean) => (
    {type: 'SET-STATUS', status} as const
)