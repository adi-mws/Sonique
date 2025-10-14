import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default function Feature() {
  const features = [
    {
      title: "Crystal Clear Sound",
      desc: "Enjoy an immersive soundscape with precision-tuned drivers. Every note and detail is delivered with stunning clarity."
    },
    {
      title: "Noise Isolation",
      desc: "Stay focused anywhere with advanced noise isolation. Block out distractions and hear only what matters most."
    },
    {
      title: "Built to Last",
      desc: "Made with premium materials and tested for durability, Sonique products are designed to stay strong and stylish."
    }
  ];


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo(
      '.feature-title-text', {
      left: -200,
      opacity: 0,
    },
      {
        left: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.feature-title-text',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }

      }
    )


    gsap.fromTo('.headphone-frame', {
      right: -300,
      opacity: 0,
      duration: 2
    }, {
      right: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.headphone-frame',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }

    })
    gsap.to(".quality-bg", {
      backgroundPosition: "200% 50%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });


    gsap.fromTo('.feature-card',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // delays each card’s animation
        scrollTrigger: {
          trigger: '.feature-card-container',
          start: 'top 80%',
          end: 'bottom+=1200 bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, [])
  return (
    <div className='bg-black w-full quality-bg overflow-hidden h-[100dvh] sticky top-0 z-100 py-10 px-10 flex flex-row items-center'>
      <div className='w-full flex-1/2 flex flex-col h-full items-center'>
        <p className='text-6xl feature-title-text text-white font-bold relative'>Full <span className='text-lime-400'>Quality </span> Assurance</p>
        <div className="flex flex-col gap-2 mt-10 feature-card-container">
          {features.map((item, index) => (
            <div className="feature-card flex py-5 border-b-1 border-neutral-200 flex-col gap-2 text-white" key={index}>
              <div className='flex gap-5 items-center'>
                <span className='border-2 border-lime-400 bg-black rounded-full w-10 h-10 flex items-center justify-center'>{index + 1}</span>
                <p className='feature-card-title font-bold text-xl'>{item.title}</p>

              </div>
              <p className='feature-card-description text-neutral-400'>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
      <div className='w-full flex-1/2 flex items-center justify-center'>
        <img src="/imgs/headphone.svg" alt="headphone-image" className='max-w-[90vh] relative headphone-frame' />
      </div>
    </div>
  )
}
