export function projectsAnimation() {
    console.log("Projects animation initialized");
    
    gsap.registerPlugin(ScrollTrigger);
    
    const projectCards = gsap.utils.toArray(".project-card");

    gsap.to(".projects-carousel", {
        xPercent: -100 * (projectCards.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".projects-carousel",
            start: "top top",
            end: () => `+=${projectCards.length * 100}%`,
            scrub: true,
            pin: true,

        }
    });
}