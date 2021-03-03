import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SearchForm from "./components/SearchForm";
import GithubState from "./context/github/GithubState";
import Jobs from "./components/jobs/Jobs";
import Job from "./components/jobs/Job";

import "./App.css";

function App() {
  return (
    <GithubState>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="container">
                    <SearchForm />
                    <Jobs />
                  </div>
                )}
              />
              <Route exact path="/job/:id" component={Job} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </GithubState>
  );
}

export default App;
