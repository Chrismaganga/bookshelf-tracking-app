// src/components/BookForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';

const BookForm= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      description,
    };
    dispatch(addBook(newBook));
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="border p-2 w-full rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block font-medium">
            Author
          </label>
          <input
            id="author"
            type="text"
            className="border p-2 w-full rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="border p-2 w-full rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
