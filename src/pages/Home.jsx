import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh" 
        >
            <Typography variant="h2" gutterBottom>
                "I cannot live without books."
            </Typography>
            <Typography variant="subtitle1" gutterBottom fontStyle="italic">
                - Thomas Jefferson
            </Typography>
        </Box>
    );
}

export default Home;
