import React, { useEffect } from "react"
import s from './Header.module.css'
import $ from 'jquery'

const Header = (props) => {

  useEffect(()=>{
    const handleResize = () => {
      const widthScreen = $('nav').width()
      const herightScreen = $('nav').height()
      const diag = Math.sqrt( Math.pow(widthScreen, 2) + Math.pow(herightScreen, 2) )

      const toggleMenu = () => {
        $(`.${s.top}, .${s.center}, .${s.bottom}`).width(diag)

        if($('nav').is(':visible')){
            $(`.${s.top}, .${s.center}, .${s.bottom}`).stop(true, true).animate(
                {  height: "0" }, 
                1000, 
                () => {
                  $('nav').fadeOut("fast");
                  $(`.${s.anchors}`).fadeOut("fast");
                }
            );
        } else {
          $('nav').fadeIn("fast").show();
          $(`.${s.top}, .${s.center}, .${s.bottom}`).stop(true, true).show().animate(
              { height: diag }, 
              1000, 
              () => {
                  $(`.${s.anchors}`).fadeIn("fast")
              }
          );
        }
      }

    if (window.innerWidth < 600) {
      $(`.${s.menuBtn}`).on('click', toggleMenu);
      $(`.${s.anchorLink}`).on('click', toggleMenu);
    }

    // clean events
    return () => {
      $(`.${s.menuBtn}`).off('click', toggleMenu);
      $(`.${s.anchorLink}`).off('click', toggleMenu);
    };
  }

    // init handleResize
    handleResize();
    window.addEventListener('resize', handleResize);

    // clean resize event
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <header>
      <p className={s.logo}>Logo</p>

      <button className={s.menuBtn} type="button">Menu</button>
      <nav>
        <div className={s.top}></div>
        <div className={s.center}></div>
        <div className={s.bottom}></div>
        <ul className={s.anchors}>
          <li><a href='#home' className={s.anchorLink}>Home</a></li>
          <li><a href='#about' className={s.anchorLink}>About</a></li>
          <li><a href='#service' className={s.anchorLink}>Service</a></li>
          <li><a href='#contact' className={s.anchorLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
