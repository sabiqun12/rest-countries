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
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country">
          <Country />
        </Route>
        <Route path="/countryName/:counId">
          <CountryDetails/>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
