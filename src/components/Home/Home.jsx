import React, { useEffect, useLayoutEffect } from "react"
import s from './Home.module.css'
import $ from 'jquery'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Home = (props) => {

  useGSAP(()=>{
    const tlLoad = gsap.timeline(),
      fenceLeftWidth = $(`.${s.fenceLeft}`).width(),
      fenceRightWidth = $(`.${s.fenceRight}`).width(),
      treeLeftWidth = $(`.${s.treeLeft}`).width(),
      treeRightWidth = $(`.${s.treeRight}`).width(),
      fenceLeft = $(`.${s.fenceLeft}`),
      fenceRight = $(`.${s.fenceRight}`);

    tlLoad
    .from ($(`.${s.graves}`), { bottom: "-600px", duration: 2.5, ease: "power3" }, "0")
    .from ($(`.${s.grass}`), { bottom: "-600px", duration: 2.5, ease: "power3" }, "0.5")
    .to(
      $(`.${s.fenceLeft}`), 
      { left: -fenceLeftWidth + window.innerWidth * 0.25, duration: 1, ease: "power2" }, 
      "3"
    )
    .to(
      $(`.${s.fenceRight}`),
      { right: -fenceRightWidth + window.innerWidth * 0.25, duration: 1, ease: "power2" }, 
      "3"
    )
    .to(
      $(`.${s.treeLeft}`),
      { left: -treeLeftWidth / 3, duration: 1.5, ease: "power2" }, 
      "3"
    )
    .to(
      $(`.${s.treeRight}`),
      { right: -treeRightWidth / 3, duration: 1.5, ease: "power2" }, 
      "3"
    )
    .from(
      $(`.${s.moreLink}`), 
      { opacity: 0, y: window.innerHeight - $(`.${s.moreLink}`)[0].getBoundingClientRect().top, duration: 2 }, 
      "3.5"
    )
    .from(
      $(`.${s.sectionheader}`), 
      { opacity: 0, y: -150, duration: 2 }, 
      "4"
    )
  })

  useLayoutEffect(()=>{
    const scrollTl = gsap.timeline(),
    ghostWidth = $(`.${s.ghost}`).width();
    
    let lastScrollY = window.scrollY; 

    scrollTl.fromTo(
      $(`.${s.ghost}`),
      {x: -ghostWidth},
      {
        scrollTrigger: {
          trigger: $(`.${s.home}`),
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const currentScrollY = window.scrollY;
  
            // scroll dirrection
            if (currentScrollY > lastScrollY) {
              // default: scroll down
              gsap.to($(`.${s.ghost}`), { scaleX: 1 });
            } else {
              // Скроллим вверх — зеркальное отражение
              gsap.to($(`.${s.ghost}`), { scaleX: -1 }); // Mirror by oX
            }
  
            lastScrollY = currentScrollY; // update last scroll pos
          }
        },
        x: window.innerWidth + ghostWidth,
      }
    );
  }, [])

  const header = "halloween";
  const letters = header.split('')

  return (
    <section id="home" className={s.home}>
      <div className={s.content}>
        <h2 className={s.sectionheader}>
          {letters.map((letter, index) => <span key={index}>{letter}</span>)}
        </h2>
        <a className={s.moreLink} href="#about">Show more</a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/hero/tree-left.png`} alt="tree left" className={s.treeLeft} />
      <img src={`${process.env.PUBLIC_URL}/assets/hero/tree-right.png`} alt="tree right" className={s.treeRight} />

      <img src={`${process.env.PUBLIC_URL}/assets/hero/graves.png`} alt="graves" className={s.graves} />
      
      <img src={`${process.env.PUBLIC_URL}/assets/hero/fence-left.png`} alt="fence left" className={s.fenceLeft} />
      <img src={`${process.env.PUBLIC_URL}/assets/hero/fence-right.png`} alt="fence right" className={s.fenceRight} />

      <img src={`${process.env.PUBLIC_URL}/assets/hero/grass.png`} alt="grass" className={s.grass} />

      <img src={`${process.env.PUBLIC_URL}/assets/hero/ghost.png`} alt="ghost" className={s.ghost} />
    </section>
  )
};

export default Home;
