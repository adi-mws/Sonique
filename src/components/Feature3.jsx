import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Feature3() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
    // Animate each character on scrollsd
  
    gsap.fromTo('.fade-up', {
      opacity: 0, 
      y: 30, 
    }, {
      opacity: 1, 
      y: 0, 
      scrollTrigger: {
        trigger: ".Feature3", 
        start: 'top 80%',
        toggleActions: "play none none reverse"
      }
    })

  const lines = {
    top: useRef(null),
    right: useRef(null),
    bottom: useRef(null),
    left: useRef(null),
  };

  const dots = {
    top: useRef(null),
    right: useRef(null),
    bottom: useRef(null),
    left: useRef(null),
  };

  const cards = {
    top: useRef(null),
    right: useRef(null),
    bottom: useRef(null),
    left: useRef(null),
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Feature3-central-image",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate each direction line + dot + card
    ["top", "right", "bottom", "left"].forEach((dir, i) => {
      const path = lines[dir].current;
      const dot = dots[dir].current;
      const card = cards[dir].current;

      tl.fromTo(
        path,
        { strokeDasharray: 800, strokeDashoffset: 800 },
        {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        i * 0.3 // stagger timing
      )
        .fromTo(
          dot,
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              start: 0,
            },
          },
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              end: 1,
            },
            duration: 1.8,
            ease: "power2.inOut",
          },
          `<`
        )
        .fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          ">-0.3"
        );
    });
  }, []);

  return (
    <section className="Feature3 relative min-h-screen flex flex-col items-center justify-center bg-white text-black px-10 py-20 overflow-hidden">
      {/* Title */}
      <div className="max-w-8xl text-center mb-16">
        <h2 className="fade-up Feature3-title text-9xl font-extrabold mb-4 tracking-tight">
          ENGINEERED TO INSPIRE
        </h2>
        <p className="fade-up text-gray-500 text-lg max-w-2xl mx-auto">
          The art of precision, balance, and technology — visualized.
        </p>
      </div>

      {/* Central Image */}
      <div className="Feature3-central-image relative flex justify-center items-center w-full max-w-6xl">
        <img
          src="/imgs/headphone-no-frame.svg"
          alt="Headphones"
          className="w-[420px] relative z-10"
        />

        {/* SVG Lines */}
        <svg
          className="absolute w-full h-full left-0 top-0"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Line */}
          <path
            ref={lines.top}
            d="M800 400 L800 100 L1000 100"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Right Line */}
          <path
            ref={lines.right}
            d="M800 400 L1050 700 L1130 700"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Bottom Line */}
          <path
            ref={lines.bottom}
            d="M400 400 L200 100 L50 100"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Left Line */}
          <path
            ref={lines.left}
            d="M600 400 L250 800 L100 800"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Moving Dots */}
        {["top", "right", "bottom", "left"].map((dir) => (
          <div
            key={dir}
            ref={dots[dir]}
            className="absolute w-3 h-3 bg-black rounded-full shadow-md"
          ></div>
        ))}

        {/* Cards */}
        <div
          ref={cards.top}
          className="absolute top-0 right-[150px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Acoustic Precision</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Tuned for soundstage depth and clarity.
          </p>
        </div>

        <div
          ref={cards.right}
          className="absolute top-[250px] right-[80px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Sleek Ergonomics</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Designed to fit perfectly for long sessions.
          </p>
        </div>

        <div
          ref={cards.bottom}
          className="absolute top-[0px] left-[70px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Sustainable Build</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Crafted with eco-conscious materials and precision assembly.
          </p>
        </div>

        <div
          ref={cards.left}
          className="absolute top-[320px] left-[80px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Dynamic Performance</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Adaptive frequency response for every moment.
          </p>
        </div>
      </div>
    </section>
  );
}
