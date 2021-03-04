import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";
import GithubState from "./context/github/GithubState";
import Jobs from "./components/jobs/Jobs";
import Job from "./components/jobs/Job";

import "./App.css";
import notFound from "./components/NotFound";

function App() {
  return (
    <GithubState>
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <Navbar />
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
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
