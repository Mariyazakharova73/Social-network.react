import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <Profile/>
    </div>
  );
}

export default App;
