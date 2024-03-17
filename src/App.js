import {
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./Components/Header/Header";
import './style.css'
import LandingPage from "./pages/LandingPage/LandingPage";
import Search from "./pages/Search/Search";
import Account from "./pages/Accounts/Account";
import Footer from "./Components/Footer/Footer";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
