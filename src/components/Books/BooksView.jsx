import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, statusBook } from './BookSlice';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Typography, Container, Box } from '@mui/material';

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
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
            Todo App for Listing and Reading Books
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>ID</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Title</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Author</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Reading Status</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books && books.map((book) => {
                        const { id, title, author, reading_status } = book;
                        return (
                            <TableRow key={id}>
                                <TableCell align="center">{id}</TableCell>
                                <TableCell align="center">{title}</TableCell>
                                <TableCell align="center">{author}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => { handleStatus(id) }}
                                        variant="contained"
                                        color={reading_status ? "primary" : "secondary"}
                                    >
                                        {reading_status ? "Completed" : "Pending"}
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                        <Link to="/edit-book" state={{ id, title, author }}>
                                            <Button variant="contained" color="info">Edit</Button>
                                        </Link>
                                        <Button
                                            onClick={() => { handleDeleteBook(id) }}
                                            variant="contained"
                                            color="error"
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Container>
    );
};

export default BooksView;
