import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter,  Routes, Link } from 'react-router-dom';
import Todo from './components/Todo';
import Login from './components/Login';
import Register from './components/Register';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Todo</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
  <Routes>
      <Route exact path="/" component={Todo} element={<Todo/>}/>
      <Route path="/login" component={Login} element={<Login/>}/>
      <Route path="/register" component={Register} element={<Register/>} />
  </Routes>
    </div>
  </BrowserRouter>
);

export default App;