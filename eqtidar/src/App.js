import "./App.css";
import Home from "./pages/HomePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appraisal from "./pages/Appraisal/Appraisal";
import Footer from "./components/Footer/Footer";
import Management from "./pages/Management/Management";
import AboutUs from "./pages/AboutUs/AboutUs";
import Realestate from './pages/realestate/Realestate'
import Sell from "./pages/Sell/Sell";
import "./index.css"
import Signup from "./pages/Signup/Form";
import Login from "./pages/Login/Form";
import Details from "./pages/details/Details";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/appraisal" element={<Appraisal />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/management" element={<Management />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
