import './App.css';

import {Route} from 'react-router';

import Login from './components/Login';
import SignUp from './components/signup/SignUp';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import OtpModal from './components/signup/otpmodal';
import Experience from './components/signup/Experience';
function App() {
  return (
    <Routes>
    <Route exact path='/' element ={<SignUp/>}></Route>
    {/* <Route path='/register' element ={<Register/>}></Route> */}
    <Route path='/login' element ={<Login/>}></Route>
    <Route path='/signup' element ={<SignUp/>}></Route>
    <Route path='/otp' element={<OtpModal/>}></Route>
    <Route path='/exp' element={<Experience/>}></Route>
    </Routes>
);
}

export default App;
  