import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appraisal from "./pages/Appraisal/Appraisal";
import Footer from "./components/Footer/Footer";
import Management from "./pages/Management/Management";
import AboutUs from "./pages/AboutUs/AboutUs";
import Rent from "./pages/Rent/Rent";
import Buy from "./pages/Buy/Buy";
import Sell from "./pages/Sell/Sell";

function App() {
  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/appraisal" element={<Appraisal />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="management" element={<Management />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
