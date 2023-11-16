import { NavBar } from "./components/NavBar/NavBar";
import { TopBar } from "./components/TopBar/TopBar";
import { Filter } from "./components/Filter/Filter";
import "./App.css";

function App() {
  return (
    <div className="containers">
      <TopBar name="Adrien"/>
      <div className="bottom-container">
        <Filter className="filter-container"/>
        <div className="bottom-right-container">
          <NavBar/>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;