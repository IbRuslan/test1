import React from 'react';
import s from "./BooksLists.module.css";
import {Button, Container, Grid, Paper} from "@mui/material";
import {CartItem} from "../../Components/CartItem/CartItem";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {BooksItem} from "../../api/api";
import {GetMoreBooksTC, SortType} from "../../store/books-reducer";

const BooksLists = () => {

    const books = useAppSelector(state => state.books)

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(GetMoreBooksTC(books.search, books.startIndex + 1, books.categories, books.sort))
    }

    const filterAndSortBooks = (books: BooksItem[], category: string, sort: SortType) => {
        const filter = books
            .filter(book => category === 'All' ? book : book.volumeInfo.categories?.some(cat => cat === category))
            .sort((a, b) => {
                if (sort === 'newest') {
                    const dateA = Date.parse(a.volumeInfo.publishedDate);
                    const dateB = Date.parse(b.volumeInfo.publishedDate);
                    return dateB - dateA;
                }
                return 0;
            });
        return filter
    };

    const filteredBooks = filterAndSortBooks(books.books, books.categories, books.sort)

    return (
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
                        filteredBooks.length ?
                            filteredBooks.map((el, i) =>
                                <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                                    <Paper elevation={4}>
                                        <CartItem key={i} book={el}/>
                                    </Paper>
                                </Grid>)
                            : ''
                    }
                </Grid>
                {books.books.length ? <Button onClick={onClickHandler} sx={{marginTop: '25px'}} variant="outlined">Load more</Button> : ''}
            </Container>
        </div>
    );
};

export default BooksLists;