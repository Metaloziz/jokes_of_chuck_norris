import { FC } from 'react'

import { NavLink } from 'react-router-dom'

type NavLinkComponentTyp = {
  name: string
}
export const NavLinkComponent: FC<NavLinkComponentTyp> = ({ name }) => (
  <NavLink to={`/${name}`}>
    {({ isActive }) => (
      <button type="button" disabled={isActive}>
        {name}
      </button>
    )}
  </NavLink>
)
