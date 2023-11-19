import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import SingUp from '../components/SingUp';
import Home from '../components/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
