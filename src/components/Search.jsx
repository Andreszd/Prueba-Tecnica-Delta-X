const Search = ({ searchBooks }) => {
  const handleChange = (evt) => {
    const value = evt.target.value;
    searchBooks(value);
  };
  return (
    <input
      type="search"
      placeholder="Search Books"
      autoFocus
      onChange={handleChange}
    />
  );
};

export default Search;
