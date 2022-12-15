import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <DialogsContainer/>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile/>
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
