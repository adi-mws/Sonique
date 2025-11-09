import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LogIn } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const soniqueRef = useRef(null);
  const [isHeroDark, setIsHeroDark] = useState(true);

  useGSAP(() => {
    const element = soniqueRef.current;

    // Initial zoom-in animation (only when at top)
    gsap.fromTo(
      element, {
        scale: 0, 
        opacity: 0, 
      }, {
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        
      }
    )

    // Sonique scroll scaling
    gsap.fromTo(
      element,
      { scale: 1, x: "20%", y: 0 },
      {
        scale: 0.1,
        x: "-35%",
        y: -190,
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "top+=100px top",
          scrub: true,
        },
      }
    );

    // Fade out "SQ" text
    gsap.fromTo(
      ".sq",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".sq",
          start: "top top",
          end: "top+=230",
          scrub: true,
        },
      }
    );



    
  }, []);

  return (
    <div
      className={`p-3 w-full flex items-center justify-center transition-colors duration-500 backdrop-blur-2xl ${
        isHeroDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="relative flex-1/4 w-full">
        {/* Header front icon */}
        <span className="font-head sq text-2xl ms-20">SQ</span>
        <p
          ref={soniqueRef}
          className={`font-bold uppercase -z-10 top-8 absolute text-[14em] pointer-events-none ${
            isHeroDark ? "text-black" : "text-white"
          }`}
        >
          Sonique
        </p>
      </div>

      <div className="flex w-full flex-2/4 gap-10 text-sm justify-center items-center">
        <a href="/">Brand</a>
        <a href="/">Products</a>
        <a href="/">About</a>
        <a href="/">Support</a>
        <a href="/">Blogs</a>
      </div>

      <div className="flex-1/4 w-full flex justify-center items-center">
        <button
          className={`py-3 flex items-center justify-center gap-2 px-10 text-sm border rounded-md transition-colors duration-500 ${
            isHeroDark
              ? "border-black text-black"
              : "border-white text-white"
          }`}
        >
          <LogIn size={18} />
          Login
        </button>
      </div>
    </div>
  );
}
