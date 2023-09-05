import React from 'react';
import s from './Home.module.css'
import {Search} from "../../Components/search/Search";
import {CartItem} from "../../Components/CartItem/CartItem";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {GetBooksTC, GetMoreBooksTC} from "../../store/books-reducer";
import {Button, Container, Grid, LinearProgress, Paper} from "@mui/material";

const Home = () => {

    const books = useAppSelector(state => state.books)
    const preloader = useAppSelector(state => state.app.preloader)

    const dispatch = useAppDispatch()

    let newTitle = ''

    const searchBooks = (title: string) => {
        if (title.trim() !== '') {
            newTitle = title
            dispatch(GetBooksTC(title))
        }
    }
    const onClickHandler = () => {
        dispatch(GetMoreBooksTC(newTitle, books.startIndex + 1, books.categories, books.sort))
    }

    return (
        <div className={s.container}>
            <Search callback={searchBooks}/>
            {preloader  && <LinearProgress sx={{marginTop: '2px'}} color={'primary'} />}
            <div className={s.content}>
                {
                    books.totalCount ?
                        <div>
                            <span>Found {books.totalCount} results</span>
                        </div>
                        : ''

                }
                <Container sx={{marginTop: 10}}>
                    <Grid container spacing={4} justifyContent="center">
                        {
                            books.books.length ?
                                books.books.map(el =>
                                    <Grid item key={el.id} xs={12} sm={6} md={4} lg={3}>
                                        <Paper elevation={4}>
                                            <CartItem book={el}/>
                                        </Paper>
                                    </Grid>)
                                : ''
                        }
                    </Grid>
                    {books.books.length ? <Button onClick={onClickHandler} sx={{marginTop: '25px'}} variant="outlined">Load more</Button> : ''}
                </Container>
            </div>
        </div>
    );
};

export default Home;