import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
     <div class="app-wrapper-content">
      <Routes>
      <Route path='/dialogs' element = {<Dialogs />}/>
      <Route path='/profile' element = {<Profile />}/>
      <Route path='/music' element = {<Music />}/>
      </Routes>
     </div> 
    </div>
    </BrowserRouter>
  );
};

export default App;
