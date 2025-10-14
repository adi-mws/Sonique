import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Feature3 from './Feature3'


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
            { scale: 0 },
            {
                scale: 30, // zooms in 4x
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: '.Feature2',
                    start: 'top top',
                    end: 'bottom+=500px bottom',
                    scrub: 1,
                    pin: true, // keeps it fixed while zoom happens
                },
            }
        )

        gsap.fromTo('.transition-page-changer', {
            scale: 0,
            opacity: 0, 
        }, {
            ease: 'none',
            opacity: 1,
            scale: 12,
            scrollTrigger: {
                trigger: '.transition-page-changer',
                start: 'top top',
                end: 'bottom bottom ',
                toggleActions: 'play none none reverse',
                pin: true
            }
        })
        gsap.to(".next-section", {
            opacity: 1,
            duration: 1.2,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".Feature2",
                start: "bottom bottom", // when Feature2 finishes
                toggleActions: "play none none reverse",
            },
        });
        // Editing the bg-img
        // bg-[url("/imgs/feature-2-bg.jpg")]
    }, [])
    return (
        <div className='Feature2 h-[100dvh] bg-[url("/imgs/headphone-bg.jpg")] bg-no-repeat bg-[length:100%_100%] bg-center overflow-hidden z-200 bg-neutral-900 w-full flex items-center flex-col sticky top-0'>
            {/* <img src="/imgs/headphone-no-frame.svg" alt="headphone" className='max-w-200 headphone-img' /> */}
            <div className='top-5 left-5 absolute flex flex-col gap-2 '>
                <p className=" text-white uppercase  text-7xl font-bold ">Crafted for comfort, tuned</p>
                <p className='text-white text-7xl font-bold uppercase'>for perfection.</p>
            </div>
            <p className=" text-white uppercase headphone-img text-8xl font-bold top-50 absolute">Dive Into Pure Sound</p>
            <div className="w-40 h-40 bg-white transition-page-changer absolute z-300 top-[50%] left-[50%] rounded-full translate-x-[-50%] translate-y-[-50%]">
{/*  */}
            </div>
            <p className=" text-white uppercase bottom-5 right-5 text-right absolute text-7xl font-bold ">Because your ears deserve the very best.</p>


            <div className="next-section">
                {/* <Feature3 /> */}
            </div>
        </div>
    )
}
