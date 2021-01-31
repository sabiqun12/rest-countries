import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country">
            <Country></Country>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
