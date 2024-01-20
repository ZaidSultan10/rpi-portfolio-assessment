import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/:id?" element={ <HomePage/> } />
          <Route path='/login' element = { <LoginPage /> } />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
