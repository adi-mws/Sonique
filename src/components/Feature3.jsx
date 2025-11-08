import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default function Feature3() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(".Feature3", {
      opacity: 0,
      background: 'white'
    },

      {
        opacity: 1,
        background: 'white',
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.Feature3',
          start: 'top+=40',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, [])
  return (
    <div className='bg-black w-[100dvw] h-[400dvh] Feature3'>
      <span className='text-lg'>Hwllo
      </span>
    </div>
  )
}
