import { useLocation } from "wouter";

const Search = () => {
  const [_, setLocation] = useLocation();

  const handleKeyDowm = (evt) => {
    const search = evt.target.value;
    if (evt.key === "Enter") {
      setLocation(`/search/${search}`);
    }
  };

  return (
    <input
      type="search"
      placeholder="Search Books"
      autoFocus
      onKeyDown={handleKeyDowm}
    />
  );
};

export default Search;
