import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


export default function Feature2() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        // gsap.fromTo(
        //     '.headphone-img', {
        //     scale: 0,
        //     opacity: 0,
        //     duration: 2
        // },
        //     {
        //         scale: 1,
        //         opacity: 1,
        //         scrollTrigger: {
        //             trigger: '.headphone-img',
        //             start: 'top 80%',
        //             toggleActions: 'play none none reverse'
        //         }

        //     }
        // )

        gsap.fromTo(
            '.headphone-img',
            { scale: 1 },
            {
                scale: 30, // zooms in 4x
                ease: "none",
                scrollTrigger: {
                    trigger: '.Feature2',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: true, // keeps it fixed while zoom happens
                },
            }
        )
    }, [])
    return (
        <div className='Feature2 h-[300dvh] overflow-hidden z-200  bg-neutral-900 w-full flex items-center flex-col sticky top-0'>
            {/* <img src="/imgs/headphone-no-frame.svg" alt="headphone" className='max-w-200 headphone-img' /> */}
            <p className=" text-white uppercase headphone-img text-7xl top-50 absolute">Hello Everyone</p>
        </div>
    )
}
