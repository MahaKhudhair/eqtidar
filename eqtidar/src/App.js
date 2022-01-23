import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CreateAccount from './components/CreateAccount/CreateAccount';
import HomePage from "./components/HomePage/HomePage";
import LogIn from './components/LogIn/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import TopNavbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
    <TopNavbar/>
    <HomePage/>
    {/* <LogIn/>
    <CreateAccount/>
    <AboutUs/> */}
    </div>
  );
}

export default App;
