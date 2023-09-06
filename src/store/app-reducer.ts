
const initialState = {
    preloader: false,
    error: null as string | null
}
export type AppState  = typeof initialState

export const appReducer = (state: AppState = initialState, action: ActionAppType): AppState => {
    switch (action.type) {
        case "SET-STATUS":
            return {...state, preloader: action.status}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type ActionAppType = | setStatusAppAT | setErrorAT

export type setStatusAppAT = ReturnType<typeof setStatusAppAC>
export type setErrorAT = ReturnType<typeof setErrorAC>

export const setStatusAppAC = (status: boolean) => (
    {type: 'SET-STATUS', status} as const
)
export const setErrorAC = (error: string | null) => (
    {type: 'SET-ERROR', error}  as const
)