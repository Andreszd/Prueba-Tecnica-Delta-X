import { useState, useEffect } from "react";
import { getAll, search, update } from "../services/books";

import { BOOK_STATES } from "../constants";

const useBooks = (findMatches) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (findMatches) {
      searchBooks(findMatches);
    } else {
      getBooks();
    }
  }, [findMatches]);

  const searchBooks = (book) => {
    search(book).then((res) => {
      if (!Array.isArray(res)) return;
      setBooks(res);
    });
  };

  const getBooks = () => getAll().then(setBooks);

  const updateShelf = async (book, newShelf) => {
    if (BOOK_STATES.includes(newShelf)) {
      update(book, newShelf);
      setBooks(
        books.map((bk) => (bk.id === book.id ? { ...bk, shelf: newShelf } : bk))
      );
    }
  };

  const filterBooksByShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };

  return { books, searchBooks, filterBooksByShelf, updateShelf };
};

export default useBooks;
