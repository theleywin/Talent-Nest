import Layout from "./components/Layout.tsx";
import SignupPage from "./pages/auth/SignupPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import NoMatchPage from "./pages/NoMatchPage.tsx";
import {Route, Routes} from "react-router-dom";
import React from "react";

function App() {


  return (
      <Layout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Layout>
  )};

export default App
