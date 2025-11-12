import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Feature3 from "./Feature3";
gsap.registerPlugin(ScrollTrigger);

export default function Feature2() {
    useGSAP(() => {
        // --- Split Text into Words/Chars ---
        const splitText = (selector) => {
            const elements = gsap.utils.toArray(selector);
            elements.forEach((el) => {
                const words = el.textContent.trim().split(" ");
                el.innerHTML = words
                    .map(
                        (word) =>
                            `<span class='word inline-block overflow-hidden'><span class='char inline-block translate-y-full'>${word}</span></span>`
                    )
                    .join(" ");
            });
        };

        splitText(".scroll-color-text");

        // --- Animate Text Words ---
        const textEls = gsap.utils.toArray(".scroll-color-text");
        textEls.forEach((el) => {
            const chars = el.querySelectorAll(".char");

            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                },
            }).to(chars, {
                y: "0%",
                color: "#FFD700",
                stagger: 0.05,
                ease: "power2.out",
                duration: 0.8,
            });
        });

        // --- Float Images at Different Speeds ---
        gsap.utils.toArray(".float-img").forEach((img) => {
            const speedClass = Array.from(img.classList).find((cls) =>
                cls.startsWith("scroll-speed-")
            );
            const speedValue = speedClass
                ? parseFloat(speedClass.replace("scroll-speed-", "")) * 0.4
                : 1;

            gsap.to(img, {
                y: -450,
                ease: "none",
                scrollTrigger: {
                    trigger: ".Feature2",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: speedValue,
                },
            });
        });

        // --- Zoom Text Transition ---
        const zoomTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".zoom-transition",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
            },
        });

        zoomTl
            .to(".zoom-text", {
                scale: 16,
                // opacity: 0,
                ease: "power2.inOut",
                duration: 10,
            }, 0)
        zoomTl.to(".transition-overlay", {
            scale: 1,
            ease: "power2.inOut",
            duration: 10
        }, 0)
            .to(
                ".transition-overlay",
                { width: "100%", duration: 3, ease: "power1.inOut" },
                "-=3"
            )
            .to(".transition-overlay", {
                duration: 3,
                ease: "power1.out",
                z: -50,
            }, "+=5");
    }, []);

    return (
        <>
            {/* --- Feature 2 Content --- */}
            <section className="Feature2 bg-[url('/imgs/headphone-bg.jpg')] bg-no-repeat bg-[length:100%_100%] bg-center overflow-hidden bg-neutral-900 w-full flex flex-col items-center relative pb-[40vh]">
                <div className="mt-20 flex flex-col gap-2">
                    <p className="scroll-color-text text-white uppercase text-7xl font-bold">
                        Crafted for comfort, tuned
                    </p>
                    <p className="scroll-color-text text-white text-7xl font-bold uppercase">
                        for perfection.
                    </p>
                </div>

                <p className="scroll-color-text text-white mt-40 mr-10 uppercase bottom-5 text-right relative text-7xl font-bold">
                    Because your ears deserve the very best.
                </p>

                {/* --- Floating Image Sections --- */}
                <div className="div-sections flex flex-wrap p-6 mt-20 items-center">
                    <p className="scroll-color-text flex-1 text-white mr-10 uppercase text-left text-3xl font-bold">
                        Every detail speaks of precision — every curve, every sound, every pixel.
                        This isn’t just design; it’s an experience engineered to outlive trends and redefine simplicity.
                    </p>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/imgs/headphone-no-frame.svg"
                            alt=""
                            className="float-img scroll-speed-1 w-[550px]"
                        />
                    </div>
                </div>

                <div className="div-sections flex flex-wrap p-6 items-center">
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/imgs/earbuds-with-case.png"
                            alt=""
                            className="float-img scroll-speed-1.5 w-[550px]"
                        />
                    </div>
                    <p className="scroll-color-text flex-1 text-white mr-10 uppercase text-left text-3xl font-bold">
                        Music isn’t heard, it’s felt.
                        When innovation meets soul, even silence begins to sound beautiful.
                    </p>
                </div>

                <div className="div-sections flex flex-wrap p-6 items-center">
                    <p className="scroll-color-text flex-1 text-white mr-10 uppercase text-left text-3xl font-bold">
                        We don’t build products we shape emotions into form.
                        Each line of design, each wave of motion, is crafted to inspire the creator in you
                    </p>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/imgs/earbud-in-air.png"
                            alt=""
                            className="float-img scroll-speed-2 w-[750px]"
                        />
                    </div>
                </div>
            </section>

            {/* --- Zoom Transition Section --- */}
            <section className="zoom-transition relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900   text-white">
                <h1 className="zoom-text text-8xl font-bold uppercase">
                    Experience Sound
                </h1>
                <div className="transition-overlay flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-0 w-[10%] h-full bg-white z-50 -scale-5">
                    <h1 className="8xl">na'osidjf asijdfo iajsof dij</h1>
                </div>
            </section>
            <Feature3 />
        </>
    );
}
