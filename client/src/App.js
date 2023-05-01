//import './App.css';

import Landing from "./views/landing/Landing";
import NotFound from "./views/notFound/NotFound";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />

        {/* En cas de que no encuentre la página */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
