import './App.css';

import {Route} from 'react-router';
import Register from './pages/Register';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route exact path='/' element ={<Login/>}></Route>
    <Route path='/register' element ={<Register/>}></Route>
    <Route path='/login' element ={<Login/>}></Route>
    </Routes>
);
}

export default App;
