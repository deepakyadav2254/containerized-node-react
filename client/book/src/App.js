import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = async (title) => {
    const id = Math.floor(Math.random() * 10000);
    const updatedBooks = [...books, { id, title }];
    setBooks(updatedBooks);

    const response = await axios.post('http://localhost:8000/books', {
      id,
      title,
    });

    console.log(response);
  };
  return (
    <div>
      <BookList />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
