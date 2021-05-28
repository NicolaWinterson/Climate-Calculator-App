import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
