import {Dispatch} from "redux";
import {BooksApi, BooksItem} from "../api/api";

const initialState = {
    books: [] as BooksItem[],
    totalCount: 0
}
export type BooksState  = typeof initialState

export type ActionBooksType =
    | ReturnType<typeof getBooksAC>

export const booksReducer = (state: BooksState = initialState, action: ActionBooksType): BooksState => {
    debugger
    switch (action.type) {
        case "GET-BOOKS":
            return {...state, totalCount: action.totalCount, books: action.books}
        default:
            return state
    }
}


export const getBooksAC = (books: BooksItem[], totalCount: number) => (
    {type: 'GET-BOOKS', books, totalCount} as const
)

export const GetBooksTC = (title: string) => (dispatch: Dispatch<ActionBooksType>) => {
    BooksApi.getBooks(title)
        .then(res => {
            debugger
            console.log(res.data)
            dispatch(getBooksAC(res.data.items, res.data.totalItems))
        })
}