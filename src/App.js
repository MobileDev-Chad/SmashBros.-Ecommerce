import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Characters from "./Component/Characters";
import Character from "./Component/Character";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:id" component={Character} />
      </Switch>
    </>
  );
};

export default App;
