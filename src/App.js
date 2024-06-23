import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
// import Test from "./pages/Test";
import Register from "./pages/Register";
import PrivacyAgreement from "./pages/PrivacyAgreement";
import UserProtectedRoutes from "./components/UserProtectedRoutes";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<UserProtectedRoutes />}>
            <Route path="/feed" element={<Feed />} />
          </Route>
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/privacyagreement" element={<PrivacyAgreement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
