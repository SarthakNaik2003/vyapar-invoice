// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from './Component/Menubar/Menubar';
import Home from './Component/Home/Home';
import Parties from './Component/Parties/Parties';
import Items from './Component/Items/Items';
import Sale from './Component/Sale/Sale';
import Purchase from './Component/Purchase/Purchase';
import QuickBilling from './Component/Quickbilling/QuickBilling';
import Navbar from './Component/Navbar/Navbar';
import { FaBars, FaBell, FaBriefcase, FaTimes } from 'react-icons/fa';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="d-flex" style={{ height: '100vh' }}>
        <div className={`d-none d-lg-block`}>
          <Menubar sidebarOpen={sidebarOpen} handleSidebarToggle={handleSidebarToggle} />
        </div>

        <div className="flex-grow-1">
          <div className="d-lg-none">
            <div className="bg-dark text-white p-2 d-flex justify-content-between align-items-center">
              <button className="btn btn-dark" onClick={handleSidebarToggle}>
                {sidebarOpen ? <FaTimes style={{ fontSize: "18px" }} /> : <FaBars style={{ fontSize: "18px" }} />}
              </button>
              <input type='text' placeholder='Enter Business Name' style={{ background:"#212529", fontSize:"18px"}}></input>
              <FaBell style={{fontSize:"18px"}}/>
            </div>
            {sidebarOpen && <Menubar sidebarOpen={sidebarOpen} handleSidebarToggle={handleSidebarToggle} />}
          </div>

          <div className="d-none d-lg-flex">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/items" element={<Items />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/quickbilling" element={<QuickBilling />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
