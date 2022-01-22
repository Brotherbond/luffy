import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


const Home = (): JSX.Element => <>
  <Header />
  <Main />
  <Footer />
</>


const App = (): JSX.Element => <Router>
  <Routes>
    <Route index element={<Home />} />
    {/* <Route path="/connect" element={<Connect />} />
        <Route path="/wallet" element={<Wallet />} /> */}
  </Routes>
</Router>

export default App;
