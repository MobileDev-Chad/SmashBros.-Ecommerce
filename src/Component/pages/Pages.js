import Navbar from "../common/Navbar";
import Home from "../home/Home";
import Characters from "../characters/Characters";
import CharacterInfo from "../characterinfo/CharacterInfo";
import About from "../about/About";
import Contact from "../contact/Contact";
import Cart from "../cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
