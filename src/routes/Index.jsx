import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pagenotfound from '../pages/Pagenotfound';
import Navbar from '../Header/Navbar';
import BooksView from '../components/Books/BooksView';
import AddBook from '../components/Books/AddBook';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/show-books" element={<BooksView/> }/>
        <Route path="add-book" element={<AddBook/>} />
        <Route path="*" element={<Pagenotfound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
