import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function HeroSection() {
    gsap.registerPlugin(ScrollTrigger)
    const earbudsRef = useRef(null);

    useGSAP(() => {

        gsap.fromTo(
            '.earbud-feature-card', 
            {
                scale: 0, 
                opacity: 0,
            }, {
                scale: 1, 
                opacity: 1, 
            }
        )
        gsap.fromTo(
            earbudsRef.current,
            { scale: 1, y: 0, opacity: 1,  },
            {
                scale: .8,
                x: 340,
                scrollTrigger: {
                    trigger: earbudsRef.current,  // element that triggers the animation
                    start: "top top", 
                                // when top of element hits top of viewport
                    end: "bottom+=200 top",
                    pin: true,        // when bottom of element hits top of viewport
                    scrub: true                   // smooth scroll-linked animation
                }
            }
        )
        // gsap.fromTo(
        //     ".HeroSection",
        //     { backgroundColor: "white" }, // use same property name
        //     {
        //       backgroundColor: "black",
        //       scrollTrigger: {
        //         trigger: ".HeroSection",
        //         start: "bottom 200%",  // when top of section reaches middle
        //         end: "bottom+=100px top",
        //         onEnter: () => console.log("Middle reached!"),
        //         toggleActions: "play none none reverse",
        //         markers: true
        //       }
        //     }
        //   );
          
    }, [])
    return (
        // Hero Section
        <div className='HeroSection h-300 w-full flex flex-col items-center justify-end relative'>
            <img
                src='/imgs/earbuds.png'
                ref={earbudsRef}
                alt='earbuds'
                className='absolute top-20 z-100 drop-shadow-2xl drop-shadow-lime-300'
            />
            {/* Earbud feature card */}
            <div className='shadow-sm py-3 px-10 absolute top-80 left-[10%] flex items-center gap-4 rounded-xl earbud-feature-card'>
                <img src="/imgs/earbud-feature-card-1.svg" alt="earbud-feature-card-icon text-sm" />
                <span className='text-neutral-800 font-light italic'>45ms Gaming Mode <br /> Zero Distractions</span>
            </div>
            <div className='shadow-sm py-3 px-10 absolute top-120 left-[20%] flex items-center gap-4 rounded-xl earbud-feature-card'>
                <img src="/imgs/earbud-feature-card-2.svg" alt="earbud-feature-card-icon text-sm" />
                <span className='text-neutral-800 font-light italic'>99.8% Signal Stability</span>
            </div>
            <div className='shadow-sm py-3 px-10 absolute top-90 right-[10%] flex items-center gap-4 rounded-xl earbud-feature-card'>
               <img src="/imgs/earbud-feature-card-3.svg" alt="earbud-feature-card-icon text-sm" />
                <span className='text-neutral-800 font-light italic'>72-Hour Battery.<br/>
                10-Min Quick Boost</span>
            </div>

            <div className=' w-full grid grid-cols-2 p-30'>
                <div className='w-full h-full flex flex-col gap-4'>
                    <h2 className='text-black text-8xl font-bold'>Earbuds 109PX</h2>
                    <p className='text-neutral-800'>From deep bass to crisp highs, every detail is delivered with stunning clarity. Engineered for comfort and powered by cutting-edge drivers.</p>
                    <button className='mt-5 py-3 px-10 border-1 max-w-60 border-black rounded-md text-black'>
                        Explore Product
                    </button>
                </div>
                <div></div>

            </div>
        </div>
    )
}
