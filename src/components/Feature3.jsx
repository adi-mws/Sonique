import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default function Feature3() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(".Feature3", {
      width: 0,
      height: 0,
      background: 'white'
    },

      {
        width: 400,
        height: 400,
        backgroujnd: 'black',
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.Feature3',
          start: 'top top',
          toggleActions: 'play none none reverse',
        }
      }

    )
  }, [])
  return (
    <div className='bg-white w-full h-[100dvh] z-500 Feature3'>Feature3</div>
  )
}
