import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBILC_URL}/movie/:id`}>
          <Detail />
        </Route>
        <Route path={`${process.env.PUBILC_URL}/`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
