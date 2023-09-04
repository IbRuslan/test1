import React, {useEffect} from 'react';
import s from './Home.module.css'
import {Search} from "../../Components/search/Search";
import {CartItem} from "../../Components/CartItem/CartItem";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {GetBooksTC} from "../../store/books-reducer";
const Home = () => {

    const books = useAppSelector(state => state.books.books)

    const dispatch = useAppDispatch()

    const searchBooks = (title: string) => {
        dispatch(GetBooksTC(title))
    }

    return (
        <div className={s.container}>
            <Search callback={searchBooks}/>
            <div className={s.content}>
                {
                    books.length ?
                        books.map(el => <CartItem key={el.id} book={el}/>)
                        : ''
                }
            </div>
        </div>
    );
};

export default Home;