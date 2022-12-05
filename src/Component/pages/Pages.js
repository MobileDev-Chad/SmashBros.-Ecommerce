import Navbar from "../common/Navbar";
import Home from "../Home";
import Characters from "../Characters";
import CharacterInfo from "../CharacterInfo";
import About from "../About";
import Contact from "../Contact";
import Cart from "../Cart"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

const Pages = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:id" component={CharacterInfo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Pages;