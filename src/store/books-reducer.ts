import {Dispatch} from "redux";
import {BooksApi, BooksItem} from "../api/api";
import {setErrorAC, setErrorAT, setStatusAppAC, setStatusAppAT} from "./app-reducer";
import {isAxiosError} from "axios";

export type CategoriesType = 'All' | 'Art' | 'Biography' | 'Computers' | 'History' | 'Medical' | 'Poetry'
export type SortType = 'relevance' | 'newest'

const initialState = {
    books: [] as BooksItem[],
    totalCount: 0,
    categories: 'All' as CategoriesType,
    sort: 'relevance' as SortType,
    startIndex: 0,
    search: ''
}
export type BooksState  = typeof initialState

export const booksReducer = (state: BooksState = initialState, action: ActionBooksType): BooksState => {
    switch (action.type) {
        case "GET-NEW-BOOKS":
            return {...state, totalCount: action.totalCount, search: action.title, books: action.books, startIndex: 0}
        case "GET-BOOKS":
            return {...state, totalCount: state.totalCount += action.totalCount, startIndex: action.indexNumber, books: [...state.books, ...action.books]}
        case "CHANGE-CATEGORIES":
            return {...state, categories: action.categories}
        case "CHANGE-SORT":
            return {...state, sort: action.sort}
        default:
            return state
    }
}

export type ActionBooksType =
    | ReturnType<typeof getBooksAC>
    | ReturnType<typeof changeCategoriesBooksAC>
    | ReturnType<typeof changeSortBooksAC>
    | ReturnType<typeof getNewBooksAC>
    | setStatusAppAT
    | setErrorAT

export const getNewBooksAC = (books: BooksItem[], totalCount: number,  title: string) => (
    {type: 'GET-NEW-BOOKS', books, totalCount, title} as const
)
export const getBooksAC = (books: BooksItem[], totalCount: number, indexNumber: number) => (
    {type: 'GET-BOOKS', books, totalCount, indexNumber} as const
)
export const changeCategoriesBooksAC = (categories: CategoriesType) => (
    {type: 'CHANGE-CATEGORIES', categories} as const
)
export const changeSortBooksAC = (sort: SortType) => (
    {type: 'CHANGE-SORT', sort} as const
)

export const GetBooksTC = (title: string) => (dispatch: Dispatch<ActionBooksType>) => {
    dispatch(setStatusAppAC(true))
    BooksApi.getBooks(title)
        .then(res => {
            dispatch(getNewBooksAC(res.data.items, res.data.totalItems, title))
        })
        .catch(e => {
            let errorMessage = ''
            if(isAxiosError(e)) {
                errorMessage = e.response
                    ? e.response.data.error.message
                    : e.message
            } else {
                errorMessage = (e as Error).message
            }
            dispatch(setErrorAC(errorMessage))
        })
        .finally(() => dispatch(setStatusAppAC(false)))
}
export const GetMoreBooksTC = (title: string, indexNumber: number, categories: CategoriesType, sort: SortType) => (dispatch: Dispatch<ActionBooksType>) => {
    dispatch(setStatusAppAC(true))
    BooksApi.getMoreBooks(title, indexNumber, categories, sort)
        .then(res => {
            dispatch(getBooksAC(res.data.items, res.data.totalItems, indexNumber))
        })
        .catch(e => {
            let errorMessage = ''
            if(isAxiosError(e)) {
                errorMessage = e.response
                    ? e.response.data.error.message
                    : e.message
            } else {
                errorMessage = (e as Error).message
            }
            dispatch(setErrorAC(errorMessage))
        })
        .finally(() => dispatch(setStatusAppAC(false)))
}

