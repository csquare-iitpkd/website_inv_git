import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const textContentRef = useRef(null);
  const circuitPathsRef = useRef([]);

  useEffect(() => {
    const textContent = textContentRef.current;
    const circuitPaths = circuitPathsRef.current;
    const circuitNodes = textContent.querySelectorAll('.circuit-node');

    gsap.set(textContent, { opacity: 0 });
    gsap.set(circuitPaths, { strokeDasharray: (i, el) => el.getTotalLength(), strokeDashoffset: (i, el) => el.getTotalLength() });
    gsap.set(circuitNodes, { opacity: 0, scale: 0.5 });

    // Create a GSAP timeline for a controlled sequence
    const tl = gsap.timeline();

    tl.to(circuitPaths, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      stagger: 0.2, // Animate paths one after another
    });

    // 2. Animate the nodes appearing and pulsing
    tl.to(circuitNodes, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    }, "-=1"); 

    // 3. Animate the main text fading in
    tl.to(textContent, {
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }, "-=0.5"); // Overlap slightly for a smoother transition

  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      
      <svg
        className="absolute w-full max-w-4xl h-auto text-cyan-500/20"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          {/* We'll use refs to animate these paths */}
          <path ref={el => circuitPathsRef.current[0] = el} d="M1 200 H 250 L 300 150 V 50 H 500 L 550 100 H 799" />
          <path ref={el => circuitPathsRef.current[1] = el} d="M1 200 H 150 L 200 250 H 350 L 400 350 H 799" />
          <path ref={el => circuitPathsRef.current[2] = el} d="M250 200 L 300 250" />
          <path ref={el => circuitPathsRef.current[3] = el} d="M500 200 L 450 250" />
        </g>
      </svg>

      <div ref={textContentRef} className="relative z-10 w-full max-w-4xl text-center px-4 opacity-0">
        
        <div className="circuit-node absolute top-[48%] left-[30%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(252,211,77,0.8)]"></div>
        <div className="circuit-node absolute top-[36%] left-[62%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(252,211,77,0.8)]"></div>
        <div className="circuit-node absolute top-[61%] left-[48%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(252,211,77,0.8)]"></div>

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-7xl md:text-8xl">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            CSQUARE
          </span>
        </h1>
        <h2 className="mt-2 text-xl font-light uppercase tracking-[0.3em] text-slate-300 sm:text-2xl md:text-4xl">
          Innovation Center
        </h2>
        <div className="mt-8">
          <p className="text-base font-medium text-amber-300 md:text-lg">
            Indian Institute of Technology, Palakkad
          </p>
          <div className="mx-auto mt-3 h-[1px] w-24 rounded-full bg-amber-300/40"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;