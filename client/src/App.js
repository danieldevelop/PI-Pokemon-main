//import './App.css';

import Landing from "./views/landing/Landing";
import NotFound from "./views/notFound/NotFound";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/add-pokemon" component={Create} />

        {/* En cas de que no encuentre la página */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
