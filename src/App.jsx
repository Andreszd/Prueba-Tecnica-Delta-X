import Search from './components/Search';
import BooksSection from './components/Section';

import useBooks from './hooks/useBooks';

import './App.css';
import Header from './components/Header';

const bookStates = ['wantToRead', 'currentlyReading', 'read'];

function App() {
  const { searchBooks, filterBooksByShelf, updateShelf } = useBooks();

  return (
    <div className="app">
      <Header>
        <Search searchBooks={searchBooks} />
      </Header>
      <main className="cards">
        {bookStates.map((state, idx) => (
          <BooksSection
            key={idx}
            title={state}
            books={filterBooksByShelf(state)}
            updateShelf={updateShelf}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
