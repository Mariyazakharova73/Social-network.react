import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <div class='app-wrapper-content'><Dialogs/></div>
      {/*<Profile/>*/}
    </div>
  );
}

export default App;
