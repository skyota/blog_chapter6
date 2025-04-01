import RouterApp from "./RouterApp";

import '../css/common.css'
import '../css/Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <RouterApp />
      </div>
    </div>
  )
}

export default Header;
