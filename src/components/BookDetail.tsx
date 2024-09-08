// src/components/BookDetail.tsx

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = useSelector((state: RootState) =>
    state.books.books.find((book) => book.id === id)
  );

  if (!book) {
    return <p className="p-4">Book not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-lg mb-2">by {book.author}</p>
      <p className="mb-4">{book.description}</p>
    </div>
  );
};

export default BookDetail;
