import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const soniqueRef = useRef(null)
  //   const lenis = new Lenis();
  //   lenis.on('scroll', ScrollTrigger.update);
  useGSAP(() => {

    const element = soniqueRef.current;

    // 🔹 Play intro animation only if page is at the top
    if (window.scrollY < 50) {
      gsap.fromTo(
        element,
        { scale: 0.5 },
        { scale: 1, duration: 1, ease: "power2.out" }
      );
    }

    // 🔹 Scroll animation
    gsap.fromTo(
      element,
      { scale: 1, x: "20%", y: 0 },
      {
        scale: 0.1,
        x: "-35%",
        y: -190,
        scrollTrigger: {
          trigger: element,
          start: "top top", // better: no weird offsets
          end: "top+=100px top",
          scrub: true,
        },
      }
    );


    gsap.fromTo(
      ".sq",
      { opacity: 1, },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".sq",
          start: "top top", // better: no weird offsets
          end: "top+=230",
          scrub: true,
          markers: true,
        },
      }
    );

  }, [])


  return (
    <div className='p-3 w-full flex items-center fixed top-0 justify-center bg-white'>

      <div className='relative flex-1/4 w-full'>
        {/* Header front icon */}
        <span className='font-head sq text-2xl ms-20'>SQ</span>
        <p
          ref={soniqueRef}
          className='font-bold uppercase -z-10 top-8 absolute text-[14em] pointer-events-none'
        >
          Sonique
        </p>

      </div>

      <div className='flex w-full flex-2/4  gap-10 text-sm justify-center items-center'>
        <a href="/">Brand</a>
        <a href="/">Products</a>
        <a href="/">About</a>
        <a href="/">Support</a>
        <a href="/">Blogs</a>
      </div>

      <div className='flex-1/4 w-full flex justify-center items-center'>
        <button className='py-3 px-10 text-sm bg-black text-white rounded-4xl'>
          Sign Up
        </button>
      </div>
    </div>
  )
}
