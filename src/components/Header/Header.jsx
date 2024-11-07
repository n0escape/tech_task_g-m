import React from "react"
import s from './Header.module.css'

const Header = (props) => {
  return (
    <header>
      <p className={s.logo}>Logo</p>
      <ul>
        <li><a href='#home' className={s.anchorLink}>Home</a></li>
        <li><a href='#about' className={s.anchorLink}>About</a></li>
        <li><a href='#service' className={s.anchorLink}>Service</a></li>
        <li><a href='#contact' className={s.anchorLink}>Contact</a></li>
      </ul>
    </header>
  )
};

export default Header;
