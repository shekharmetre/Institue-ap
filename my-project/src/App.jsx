import React, { useEffect, useState } from 'react';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import Homes from './pages/home/Home';
import Tilent from './pages/multerlearning/Tilent';
import Home from './components/home/Home';
import Profile from './components/Profile';
import Screen from './components/Screen';
import ChatHome from './pages/chathome/ChatHome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Footer from './pages/courses/CourseContent/Footer';
import HomeCour from './pages/courses/HomeCour';
import Heros from './pages/courses/CourseContent/Heros';

const App = () => {
  const message = useSelector((state) => state.Messages.message);

  useEffect(() => {
    toast(message);
  }, [message]);

 
  return (
    <div className="">
      <BrowserRouter>
        <Home />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/multer" element={<Tilent />} />
          <Route path="/dashboard/:id" element={<Homes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/screen" element={<Screen />} />
          <Route path="/profile/:room" element={<Screen />} />
          <Route path="/chat" element={<ChatHome />}  />
          <Route path="/courses" element={<HomeCour />} />
          <Route path="/courses/training" element={<Heros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
