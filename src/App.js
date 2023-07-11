import React from "react";
import Home from "./pages/Home";
import Presence from "./pages/Presence";
import ProductService from "./pages/ProductService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Grievance from "./pages/Grievance";
import Partners from "./pages/Partners";
import Policies from "./pages/Policies";
import Team from "./pages/Team";
import Technology from "./pages/Technology";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/presence" element={<Presence />}></Route>
          <Route exact path="/products" element={<ProductService />}></Route>
          <Route exact path="/board" element={<Board />}></Route>
          <Route exact path="/careers" element={<Career />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/grievance" element={<Grievance />}></Route>
          <Route exact path="/partners" element={<Partners />}></Route>
          <Route exact path="/policies" element={<Policies />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/technology" element={<Technology />}></Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router >
  );
}

export default App;
