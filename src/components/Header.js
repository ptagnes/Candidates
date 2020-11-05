import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title">Kandidater</h1>
        <NavLink className="header__title" to="/" activeClassName="is-active" exact={true}>
          Start
        </NavLink>
        <NavLink className="header__title" to="/create" activeClassName="is-active">
          Lägg till kandidat
        </NavLink>
        <NavLink className="header__title" to="/help" activeClassName="is-active">
          Hjälp
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
