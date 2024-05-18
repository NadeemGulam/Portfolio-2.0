import React from "react";
import Home from './components/home-page/home.jsx'
import MoreProjects from "./components/moreProjects/moreProjects.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (


  <BrowserRouter>
  <Routes>
    <Route path='' element={<Home/>} />
    <Route path='/more-projects' element={<MoreProjects/>} />
  </Routes> 
   </BrowserRouter>
 
  );
};

export default App;
