import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SearchForm from "./components/SearchForm";
import GithubState from "./context/github/GithubState";
import Jobs from "./components/jobs/Jobs";

function App() {
  return (
    <GithubState>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <div className="container">
            <SearchForm />
            <Jobs />
          </div>
        </div>
        <Footer />
      </div>
    </GithubState>
  );
}

export default App;
