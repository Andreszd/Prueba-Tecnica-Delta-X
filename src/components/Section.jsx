import Card from "./Card";

const BooksSection = ({ title, books = [], updateShelf }) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__body l-flex-cards">
        {books.map((book) => (
          <Card key={book.id} book={book} updateShelf={updateShelf} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
