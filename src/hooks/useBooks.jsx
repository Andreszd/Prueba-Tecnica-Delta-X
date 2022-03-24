import { useState, useEffect } from 'react';
import { getAll, search, update } from '../services/books';

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, [update]);

  const searchBooks = (book) => {
    if (book.length === 0) return getBooks();

    search(book).then((res) => {
      if (!Array.isArray(res)) return;
      const filterBooks = res?.filter((book) => 'shelf' in book);

      setBooks(filterBooks);
    });
  };

  const getBooks = () => getAll().then(setBooks);

  const updateShelf = async (book, newShelf) => {
    update(book, newShelf);
    setBooks(
      books.map((bk) => (bk.id === book.id ? { ...bk, shelf: newShelf } : bk))
    );
  };

  const filterBooksByShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };

  return { books, searchBooks, filterBooksByShelf, updateShelf };
};

export default useBooks;
