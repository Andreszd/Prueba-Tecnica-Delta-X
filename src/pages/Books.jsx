import BooksSection from "../components/Section";

import useBooks from "../hooks/useBooks";

import { BOOK_STATES } from "../constants";

export default function Books() {
  const { filterBooksByShelf, updateShelf } = useBooks();

  return (
    <main className="cards">
      {BOOK_STATES.map((state, idx) => (
        <BooksSection
          key={idx}
          title={state}
          books={filterBooksByShelf(state)}
          updateShelf={updateShelf}
        />
      ))}
    </main>
  );
}
