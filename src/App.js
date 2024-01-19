import './App.css';
import Home from './Home';
import SignUp from './signUp';
import Login from './login';
import { Route, Routes } from 'react-router-dom';
import Hamb from './hamberger';
import BloodReport from './BloodReport';
import HealthDetails from './HealthDetails';
import Navbar from './navBar';
import DietChart from './DietCharat';
import Yoga from './Yoga';
import ContactUs from './Contactus';
import AboutUs from './AboutUs';
import TestCode from './TestCode';
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/BloodReport" element={<BloodReport/>} />
      <Route path="/HealthDetails" element={<HealthDetails/>} />
      <Route path="/dietchart" element={<DietChart/>} />
      <Route path="/yoga" element={<Yoga/>} />
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/testcode" element={<TestCode/>} />
    </Routes> 

    
 

    </>
  );
}

export default App;
