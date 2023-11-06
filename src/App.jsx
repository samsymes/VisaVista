import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";

import ChecklistCard from "./components/checklistCard";
import "./App.css";
import AddDocument from "./components/AddDocument";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="row">
        <CountryCard />
        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}

export default App;
