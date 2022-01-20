import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss"
import Header from './components/Header'
import Main from './components/Main'


function App() {
  const Home = () => {
    return (
      <>
        <Header />
        <Main />
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
