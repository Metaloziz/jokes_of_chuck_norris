import { FC } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Display, List, NavLinkComponent } from 'components';
import { path } from 'utils/enum';

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <div className="buttons">
        <NavLinkComponent name={path.DISPLAY} />
        <NavLinkComponent name={path.LIST} />
      </div>
      <Routes>
        <Route path={`/${path.DISPLAY}`} element={<Display />} />
        <Route path={`/${path.LIST}`} element={<List />} />
        <Route path="/*" element={<div>main</div>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
