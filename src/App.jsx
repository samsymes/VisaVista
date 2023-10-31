import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import Menu from "./components/Menu";
import ChecklistCard from "./components/checklistCard";
import "./App.css";
import AddDocument from "./components/AddDocument";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Menu />
      </div>
      <div className="row">
        <CountryCard country="canada" />
        <ChecklistCard />
      </div>

      <AddDocument />
    </>
  );
}

export default App;
