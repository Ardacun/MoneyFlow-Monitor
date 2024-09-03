import { NavBar } from "./components/NavBar/NavBar";
import { TopBar } from "./components/TopBar/TopBar";
import { Filter } from "./components/Filter/Filter";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { FinancialProduct } from "./components/FinancialProduct/FinancialProduct";
import "./App.css";

import React, { useState } from 'react';


function App() {
  
  // State to manage the visibility of ToggleComponent
  const [view, setView] = useState(false);

  return (
    <div className="containers">
      <TopBar name="Adrien"/>
      <div className="bottom-container">
        <Filter className="filter-container"/>
        <div className="bottom-right-container">
          <NavBar setView={setView}/>
          <div>
            {view === 'dashboard' && <Dashboard/>}
            {view === 'product' && <FinancialProduct/>}
            {view === 'login' && <Login/>}
            {view === 'subscribe' && <Subscribe/>}
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;