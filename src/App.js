import './App.css';
import LandingPage from './pages/landing'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card3d from "./components/Card3d";

const theme = {
    palette: {
        primary: 'green',
        text: '#fff',
    },
};



function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/card3d" element={<Card3d />} />
            <Route path="portfolio-arjun-more" element={<LandingPage from={'portfolio'} />} />
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>

}

export default App;
