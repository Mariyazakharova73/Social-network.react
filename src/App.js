import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div class="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} />
            <Route path="/dialogs*" element={<Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          z
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
