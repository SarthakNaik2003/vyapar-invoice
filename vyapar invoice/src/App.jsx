import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from './Component/Menubar';
import Home from './Component/Home';
import Parties from './Component/Parties';
import Items from './Component/Items';
import Sale from './Component/Sale';
import Purchase from './Component/Purchase';
import QuickBilling from './Component/QuickBilling';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="d-flex" style={{ height: '100vh' }}>
        <Menubar />
        <div className="content" style={{ flexGrow: 1,  }}>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
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
