import {Dispatch} from "redux";
import {PizzaApi, Pizzas} from "../api/api";

const initialState = [] as Pizzas[]
export type BooksState  = Pizzas[]

export type ActionBooksType =
    | ReturnType<typeof getBooksAC>

export const booksReducer = (state: BooksState = initialState, action: ActionBooksType): BooksState => {
    switch (action.type) {
        case "GET-PIZZAS":
            return action.pizzas
        default:
            return state
    }
}


export const getBooksAC = (pizzas: any) => (
    {type: 'GET-PIZZAS', pizzas} as const
)

export const GetBooksTC = () => (dispatch: Dispatch<ActionBooksType>) => {
    PizzaApi.getPizzas()
        .then(res => {
            dispatch(getBooksAC(res.data))
        })
}