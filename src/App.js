import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Characters from "./Component/Characters";
import CharacterInfo from "./Component/CharacterInfo";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:id" component={CharacterInfo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
};

export default App;
