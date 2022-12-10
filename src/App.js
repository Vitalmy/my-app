import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'},
]
let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-cam'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yoo'},
  {id: 5, message: 'Wow'},
]


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
     <div class="app-wrapper-content">
      <Routes>
      <Route path='/dialogs' element = {<Dialogs dialogs={dialogs} messages={messages}/>}/>
      <Route path='/profile' element = {<Profile />}/>
      <Route path='/news' element = {<News />}/>
      <Route path='/music' element = {<Music />}/>
      <Route path='/settings' element = {<Settings />}/>
      </Routes>
     </div> 
    </div>
    </BrowserRouter>
  );
};

export default App;
