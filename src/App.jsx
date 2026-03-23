import React from "react";
import Home from './components/home-page/home.jsx'
import MoreProjects from "./components/moreProjects/moreProjects.jsx";
import NotFound from "./components/NotFound/NotFound";
import ChatBot from "./components/ChatBot/ChatBot";
import useVisitorTracking from "./hooks/useVisitorTracking";

import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  useVisitorTracking();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/more-projects' element={<MoreProjects/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <ChatBot />
    </>
  );
};

export default App;

