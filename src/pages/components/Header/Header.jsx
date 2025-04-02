import RouterApp from "../RouterApp/RouterNav";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__inner}>
        <RouterApp />
      </div>
    </div>
  )
}

export default Header;
