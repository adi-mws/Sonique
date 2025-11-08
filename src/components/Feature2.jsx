import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Feature3 from './Feature3'
gsap.registerPlugin(ScrollTrigger);

export default function Feature2() {
    useGSAP(() => {
        // Split the text into words & characters
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

        // Animate the text — letter-by-letter on scroll
        const textEls = gsap.utils.toArray(".scroll-color-text");
        textEls.forEach((el) => {
            const chars = el.querySelectorAll(".char");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                },
            });

            tl.to(chars, {
                y: "0%",
                color: "#FFD700",
                stagger: 0.05,
                ease: "power2.out",
                duration: 0.8,
            });
        });

        // Your other animations (headphone zoom, transitions, etc.)
        gsap.fromTo(
            ".headphone-img",
            { scale: 0 },
            {
                scale: 30,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".Feature2",
                    start: "top top",
                    end: "bottom+=500px bottom",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            ".transition-page-changer",
            { scale: 0, opacity: 1 },
            {
                opacity: 0,
                scale: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: ".transition-page-changer",
                    start: "top top",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.to(".next-section", {
            opacity: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".Feature2",
                start: "top -50%",
                toggleActions: "play none none reverse",
            },
        });


        gsap.utils.toArray(".float-img").forEach((img) => {
            const speedClass = Array.from(img.classList).find((cls) =>
                cls.startsWith("scroll-speed-")
            );
            const speedValue = speedClass
                ? parseFloat(speedClass.replace("scroll-speed-", "")) * 0.4
                : 1;

            gsap.to(img, {
                y: -400,
                ease: "none",
                scrollTrigger: {
                    trigger: ".Feature2",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: speedValue,
                },
            });
        });
    }, []);

    return (
        <div className="Feature2 bg-[url('/imgs/headphone-bg.jpg')] bg-no-repeat bg-[length:100%_100%] bg-center overflow-hidden z-200 bg-neutral-900 w-full flex items-center flex-col sticky top-0">
            <div className="top-5 relative flex flex-col gap-2">
                <p className="scroll-color-text text-white uppercase text-7xl font-bold">
                    Crafted for comfort, tuned
                </p>
                <p className="scroll-color-text text-white text-7xl font-bold uppercase">
                    for perfection.
                </p>
            </div>
            {/* <p className="scroll-color-text text-white uppercase headphone-img text-8xl font-bold top-50 relative"> */}
            {/* Dive Into Pure Sound */}
            {/* </p> */}
            {/* <div className="w-40 h-40 bg-white transition-page-changer absolute z-300 top-[50%] left-[50%] rounded-full translate-x-[-50%] translate-y-[-50%]"></div> */}
            <p className="scroll-color-text text-white mt-40 mr-10 uppercase bottom-5 text-right relative text-7xl font-bold">
                Because your ears deserve the very best.
            </p>

            <div className="div-sections flex p-6">
                <p className="scroll-color-text flex-1/2 text-white mr-10 uppercase bottom-5 text-left relative text-sm font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quidem cum natus quae beatae ipsum mollitia recusandae vel, tenetur maiores, suscipit quas blanditiis? Quibusdam cupiditate obcaecati alias magni aut temporibus, assumenda repellendus, accusantium fuga voluptatibus dolor ex aspernatur repudiandae omnis odio! Nam error natus velit vel ea odit soluta hic!
                </p>
                <div className="flex-1/2">
                    <img src="/imgs/headphone-no-frame.svg" alt="" className="float-img" />
                </div>
            </div>

            <div className="div-sections flex p-6">
                <div className="flex-1/2">
                    <img src="/imgs/earbuds-with-case.png" alt="" className="float-img" />
                </div>
                <p className="scroll-color-text flex-1/2 text-white mr-10 uppercase bottom-5 text-left relative text-sm font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quidem cum natus quae beatae ipsum mollitia recusandae vel, tenetur maiores, suscipit quas blanditiis? Quibusdam cupiditate obcaecati alias magni aut temporibus, assumenda repellendus, accusantium fuga voluptatibus dolor ex aspernatur repudiandae omnis odio! Nam error natus velit vel ea odit soluta hic!
                </p>
            </div>



            <div className="next-section">
                <Feature3 />
            </div>
        </div>
    );
}
