import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [nextId, setNextId] = useState(3); 

    

    const numberofBooks = useSelector((state) => state.booksReducer.books.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numberofBooks + 1, title, author };
        dispatch(addBook(book));
        navigate("/show-books", {replace:true});
    }

    const handleAddBook = () => {
       
        const newId = nextId;
        setNextId(prevId => prevId + 1); 
        dispatch(addBook({ id: newId, title, author, reading_status}));
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor='title'>Title: </label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="form-field">
                    <label htmlFor='author'>Author: </label>
                    <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button type="submit"  onClick={handleAddBook} >Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
