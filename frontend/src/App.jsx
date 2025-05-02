import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserLogout from "./pages/UserLogout";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import Home from "./pages/home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={<UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>} />

       
      </Routes>

    </div>
  );
};

export default App;
