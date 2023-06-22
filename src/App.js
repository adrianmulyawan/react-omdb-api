import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home.page";
import NotfoundPage from "./pages/notfound.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <NotfoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
