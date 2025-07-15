import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/register";
import { ToastContainer } from "react-toastify";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home/Home";
import FormComponent from "./components/kyc/FormComponents";
import FirebaseFirestore from "./components/adminform/FirebaseFirestore";
import Form from "./components/form/Form";
import Countrystate from "./components/adminform/Countrystate";
import Adminlogin from "./components/Adminlogin";

export function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      {/* <Navbar/>  */}
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>

              <Route
                path="/" element={user ? <Navigate to="/profile" /> : <Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reset" element={<ForgotPassword />} />
              <Route path="/reset" element={<ForgotPassword />} />
              <Route path="/kyc" element={<FormComponent />} />
              <Route path="/admin-form" element={<FirebaseFirestore />} />
              <Route path="/home" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/dropdown" element={<Countrystate />} />
              <Route path="/adminlogin" element={<Adminlogin />} />


            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}
