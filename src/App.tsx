import { FC } from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Display, List, NavLinkComponent } from 'components'
import { path } from 'utils/enum'

const App: FC = () => (
  <div className="App">
    <div className="buttons">
      <NavLinkComponent name={path.DISPLAY} />
      <NavLinkComponent name={path.LIST} />
    </div>
    <Routes>
      <Route path="/" element={<Navigate to={`${path.DISPLAY}`} />} />
      <Route path={`/${path.DISPLAY}`} element={<Display />} />
      <Route path={`/${path.LIST}`} element={<List />} />
      <Route path="/*" element={<Navigate to={`${path.DISPLAY}`} />} />
    </Routes>
  </div>
)

export default App
