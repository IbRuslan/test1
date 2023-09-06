import {IconButton, Paper} from '@mui/material';
import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState} from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import s from './Search.module.css'
import {SuperSelect} from "../SuperSelect";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {CategoriesType, changeCategoriesBooksAC, changeSortBooksAC, SortType} from "../../store/books-reducer";
import {NavLink} from "react-router-dom";

type SearchType = {
    callback: (title: string) => void
}

export const Search: React.FC<SearchType> = ({callback}) => {

    const [title, setTitle] = useState('')

    const selectedCategories = useAppSelector(state => state.books.categories)
    const selectedSort = useAppSelector(state => state.books.sort)

    const dispatch = useAppDispatch()

    const categories: CategoriesType[] = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']
    const sort: SortType[] = ['relevance', 'newest']

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const changeCategories = (value: string) => {
        dispatch(changeCategoriesBooksAC(value as CategoriesType))
    }
    const changeSort = (value: string) => {
        dispatch(changeSortBooksAC(value as SortType))
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            callback(title)
            event.preventDefault()
        }
    }

    return (
        <div className={s.container}>
            <div className={s.content}>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', alignItems: 'center'}} className={s.paper}>
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="Search Google Books"
                        inputProps={{'aria-label': 'search google maps'}}
                        value={title} onChange={onChangeInputHandler}
                        onKeyDown={onKeyDownHandler}
                    />
                    <NavLink to={'/books'}>
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={() => callback(title)}>
                            <SearchIcon/>
                        </IconButton>
                    </NavLink>
                </Paper>
                <div className={s.selects}>
                    <SuperSelect values={categories} name={'Categories'} selected={selectedCategories} callback={changeCategories}/>
                    <SuperSelect values={sort} name={'Sort'} selected={selectedSort} callback={changeSort}/>
                </div>
            </div>
        </div>
    );
};
