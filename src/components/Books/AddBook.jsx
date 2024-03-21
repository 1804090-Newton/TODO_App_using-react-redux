import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const maxId = useSelector((state) => Math.max(...state.booksReducer.books.map(book => book.id)) || 2);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = maxId + 1; 
        const book = { id: newId, title, author };
        dispatch(addBook(book));
        navigate("/show-books", { replace: true });
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Add Book
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="title"
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="author"
                                label="Author"
                                variant="outlined"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button type="submit" variant="contained" color="primary">Add Book</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default AddBook;
