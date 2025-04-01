import { NavLink, Outlet } from "react-router-dom";

import '../css/common.css'
import '../css/Nav.css'

const RouterApp = () => {
  return (
    <>
      <ul className="header_nav nav">
        <li>
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/">お問い合わせ</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default RouterApp;
