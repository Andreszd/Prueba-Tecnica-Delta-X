import { Link } from "wouter";
import Search from "./Search";

const Header = () => (
  <header className="header">
    <Link to="/">Books</Link>
    <Search />
  </header>
);

export default Header;
