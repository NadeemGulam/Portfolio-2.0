import React from "react";
import Home from './components/home-page/home.jsx'
import MoreProjects from "./components/moreProjects/moreProjects.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (


  <BrowserRouter>
  <Routes>
    <Route path='/Portfolio-2.0/' element={<Home/>} />
    <Route path='/Portfolio-2.0/more-projects' element={<MoreProjects/>} />
  </Routes> 
   </BrowserRouter>
 
  );
};

export default App;
