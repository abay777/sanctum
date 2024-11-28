import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Property from "../pages/property/Property";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/login/Login";
import Signup from "../pages/signUp/SignUp";
import ContactUs from "../pages/contact us/ContactUs";
import AboutUs from "../pages/About us/AboutUs";

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        {/* Define routes for your application */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/properties" element={<Property/>} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        
        {/* Catch-all route for undefined paths */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
