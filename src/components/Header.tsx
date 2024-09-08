
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 p-4 text-white">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Bookshelf Tracker</h1>
      <div>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/add" className="hover:underline items-center justify-center">
          Add Book
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
