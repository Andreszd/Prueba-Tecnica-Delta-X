import Search from "./pages/Search";
import Header from "./components/Header";
import Books from "./pages/Books";

import "./App.css";
import { Route, Switch } from "wouter";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={Books} />
        <Route path="/search/:book" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
