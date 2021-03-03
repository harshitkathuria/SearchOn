import "./App.css";
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
