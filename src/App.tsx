
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Footer from './components/Footer';



const App= () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/add" element={<BookForm />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
    <Footer/>
  </div>
);

export default App;
