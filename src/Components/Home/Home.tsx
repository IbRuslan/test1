import React from 'react';
import s from './Home.module.css'
import {Search} from "../search/Search";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {GetBooksTC} from "../../store/books-reducer";
import {LinearProgress} from "@mui/material";

const Home = () => {

    const preloader = useAppSelector(state => state.app.preloader)

    const dispatch = useAppDispatch()

    const searchBooks = (title: string) => {
        if (title.trim() !== '') {
            dispatch(GetBooksTC(title))
        }
    }

    return (
        <div className={s.container}>
            <Search callback={searchBooks}/>
            {preloader  && <LinearProgress sx={{marginTop: '2px'}} color={'primary'} />}
        </div>
    );
};

export default Home;