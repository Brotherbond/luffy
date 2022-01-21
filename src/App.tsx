import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  const Home = () => {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/connect" element={<Connect />} />
        <Route path="/wallet" element={<Wallet />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
