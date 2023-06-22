import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home.page";
import NotfoundPage from "./pages/notfound.page";
import DetailPage from "./pages/detail.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movie/detail/:imdbID" element={ <DetailPage /> } />
        <Route path="*" element={ <NotfoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
