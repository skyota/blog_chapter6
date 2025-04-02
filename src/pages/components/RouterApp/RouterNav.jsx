import { NavLink, Outlet } from "react-router-dom";

import classes from "./Nav.module.css";

const RouterNav = () => {
  return (
    <>
      <ul className={classes.nav}>
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

export default RouterNav;
