import BooksSection from "../components/Section";

import useBooks from "../hooks/useBooks";

export default function Search({ params }) {
  const { books, updateShelf } = useBooks(params?.book);

  return (
    <main className="cards">
      <BooksSection title="Results" books={books} updateShelf={updateShelf} />
    </main>
  );
}
