import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BookSlice';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';

const EditBook = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, title, author }));
        navigate("/show-books", { replace: true });
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Edit Book
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
                            <Button type="submit" variant="contained" color="primary">
                                Update Book
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default EditBook;
