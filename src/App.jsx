import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import SelectMenu from "./components/SelectMenu";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SelectMenu />
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
