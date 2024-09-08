// // src/components/BookList.tsx
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
// import PropTypes from 'prop-types';

// const BookList: React.FC = () => {
//   const books = useSelector((state: RootState) => state.books.books);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Bookshelf</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id} className="border p-2 my-2">
//             {book.title} by {book.author}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// BookList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       description: PropTypes.string,
//     })
//   ),
// };

// export default BookList;
// src/components/BookList.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = useSelector((state: RootState) => state.books.books);
  
  // State for managing the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bookshelf</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 w-full mb-4 rounded"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Display Filtered Books */}
      {filteredBooks.length === 0 ? (
        <p>No books found. Try a different search term.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-2 mb-2 rounded-md shadow-sm">
              <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline">
                {book.title}
              </Link>{' '}
              by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
