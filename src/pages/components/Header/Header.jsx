import Navigation from "./Navigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__inner}>
        <Navigation />
      </div>
    </div>
  )
}

export default Header;
