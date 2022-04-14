import React from 'react';
import './App.css';
import {Display} from "components/Display/Display";
import {List} from "components/List/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavLinkComponent} from "components/NavLinkComponent/NavLinkComponent";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className={'buttons'}>
          <NavLinkComponent name={'display'}/>
          <NavLinkComponent name={'list'}/>
        </div>
        <Routes>
          <Route path="/display" element={<Display/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/*' element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
