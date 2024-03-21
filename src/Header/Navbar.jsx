import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                    TODO APP
                </Typography>
                <Button component={Link} to="/TODO_App_using-react-redux" color="inherit" variant="text">
                    Home
                </Button>
                <Button component={Link} to="/show-books" color="inherit" variant="text">
                    Show Books
                </Button>
                <Button component={Link} to="/add-book" color="inherit" variant="text">
                    Add Book
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
