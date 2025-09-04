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

        gsap.fromTo(
            soniqueRef.current,
            {
                scale: 0.5

            },  {
                scale: 1
            }
        )
        gsap.fromTo(
            soniqueRef.current,
            { scale: 1, x: '20%', y: 0 },
            {
                scale: 0.1,
                x: '-35%',
                y: -170,
                scrollTrigger: {
                    trigger: soniqueRef.current,  // element that triggers the animation
                    start: "top=-10px top",             // when top of element hits top of viewport
                    end: "top+=100px top",            // when bottom of element hits top of viewport
                    scrub: true                   // smooth scroll-linked animation
                }
            }
        )
    }, [])


    return (
        <div className='p-3 w-full flex z-50 items-center fixed top-0 justify-center bg-white'>
            <div className='relative flex-1/4 w-full'>
                {/* Header front icon */}
                <p
                    ref={soniqueRef}
                    className='font-bold uppercase absolute text-[14em]'
                >
                    Sonique
                </p>
            </div>

            <div className='flex w-full flex-2/4 gap-10 text-sm justify-center items-center'>
                <a href="">Brand</a>
                <a href="">Products</a>
                <a href="">About</a>
                <a href="">Support</a>
                <a href="">Blogs</a>
            </div>

            <div className='flex-1/4 w-full flex justify-center items-center'>
                <button className='py-3 px-10 text-sm bg-black text-white rounded-4xl'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}
