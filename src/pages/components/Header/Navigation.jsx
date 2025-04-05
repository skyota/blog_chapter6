import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Navigation = () => {
  return (
    <>
      <ul className={classes.nav}>
        <li>
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">お問い合わせ</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
