// Footer.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Footer() {
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Precision in every pulse.",
    "Designing silence that sings.",
    "Engineering emotion into sound.",
  ];

  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;

    // Animate stroke flow
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Animate moving dot
    gsap.to(dotRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      ease: "linear",
      repeat: -1,
    });

    // Glow pulse
    gsap.to(glowRef.current, {
      scale: 1.4,
      opacity: 0.25,
      duration: 1.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Quote rotation
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4200);
    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <footer className="w-full bg-[#0a0c10] text-gray-300 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
           {/* Quote Section */}
           <div className="h-10 mb-10 flex items-center justify-center">
          <p
            key={quoteIndex}
            className="text-lime-300 text-center text-5xl uppercase font-semibold italic tracking-wide transition-all duration-700 ease-in-out"
            style={{
              animation: "fadeInOut 4.2s ease-in-out infinite",
            }}
          >
            {quotes[quoteIndex]}
          </p>
        </div>
        {/* SVG Section */}
        <div className="relative w-full h-44 md:h-36 mb-12">
          <svg
            viewBox="0 0 1200 240"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="smoothFlow" x1="0" x2="1">
                <stop offset="0%" stopColor="#84cc16" stopOpacity="1" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
              </linearGradient>
              <filter id="glowBlur">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base faint wave (static background for depth) */}
            <path
              d="M0 150 C200 100, 400 200, 600 140 S1000 180, 1200 130"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="2"
            />

            {/* Main animated path */}
            <path
              ref={pathRef}
              d="M0 160 C300 90, 600 210, 900 130 S1200 170, 1400 140"
              fill="none"
              stroke="url(#smoothFlow)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glowBlur)"
            />

            {/* Glowing trail */}
            <circle
              ref={glowRef}
              r="12"
              fill="#bef264"
              opacity="0.15"
              style={{ filter: "blur(16px)" }}
            />

            {/* Moving dot */}
            <circle ref={dotRef} r="4" fill="#bef264" />
          </svg>
        </div>

     

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold text-lg tracking-wide">
              Sonique
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Crafted for clarity • Tuned for life
            </div>
          </div>

          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="" className="hover:text-white transition-colors">Products</a>
            <a href="" className="hover:text-white transition-colors">About</a>
            <a href="" className="hover:text-white transition-colors">Support</a>
            <a href="" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sonique
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(8px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-8px); }
          }
        `}
      </style>
    </footer>
  );
}
