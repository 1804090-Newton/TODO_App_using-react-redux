import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, statusBook } from './BookSlice';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleStatus = (id) => {
        dispatch(statusBook(id));
    };
    
    return (
        <div>
            <h2> Todo app for listing Reading book</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Reading Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books && books.map((book) => {
                        const { id, title, author, reading_status } = book;
                        return (
                            <TableRow key={id}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{author}</TableCell>
                                <TableCell>
                                    {reading_status ? (
                                        <Button onClick={() => { handleStatus(id) }} variant="contained" color="primary">Completed</Button>
                                    ) : (
                                        <Button onClick={() => { handleStatus(id) }} variant="contained" color="secondary">Pending</Button>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Link to="/edit-book" state={{ id, title, author }}>
                                        <Button variant="contained">Edit</Button>
                                    </Link>
                                    <Button onClick={() => { handleDeleteBook(id) }} variant="contained" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default BooksView;
