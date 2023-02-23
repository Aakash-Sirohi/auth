import './App.css';

import {Route} from 'react-router';

import Login from './components/Login';
import SignUp from './components/signup/SignUp';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route exact path='/' element ={<Login/>}></Route>
    <Route path='/login' element ={<Login/>}></Route>
    <Route path='/signup' element ={<SignUp/>}></Route>
    </Routes>
);
}

export default App;
  