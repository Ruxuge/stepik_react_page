import React from 'react'
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BrowsersList from "./components/BrowsersList/BrowsersList";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowsersList />
      <Footer />
    </div>
  );
}
