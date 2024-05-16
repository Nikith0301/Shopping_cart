import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/home/index.jsx";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter.jsx";
import Bank from "./pages/Bank.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/counter" element={<Counter />} /> */}
          <Route exact path="/bank" element={<Bank />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
