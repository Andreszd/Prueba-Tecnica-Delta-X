const states = ['currentlyReading', 'wantToRead', 'read'];

const Card = ({ book, updateShelf }) => {
  const { imageLinks, title, subtitle, authors, shelf } = book;

  return (
    <div className="card">
      <div className="card__body">
        <img className="card__img" src={imageLinks?.smallThumbnail} />
        <h2 className="card__title">{title}</h2>
        <h3 className="card__title card__title--h3">{subtitle}</h3>
        <div className="card__text-content">
          <p className="card__text">
            <strong>Autor: </strong>
            {authors}
          </p>
        </div>
      </div>
      <div className="card__footer">
        <label>State:</label>
        <select
          defaultValue={shelf}
          onChange={(evt) => updateShelf(book, evt.target.value)}>
          <option disabled>select</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Card;
