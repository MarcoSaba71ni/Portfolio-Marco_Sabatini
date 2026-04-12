export function headerAnimation() {
    console.log("Header animation initialized");
    
    
    gsap.registerPlugin(ScrollTrigger);


    const headerTL = gsap.timeline();

    headerTL
    .from(".nav-header", {
    opacity: 0,
    y: -20,
    duration: 0.6
    })
    .from(".nav-item", {
    opacity: 0,
    y: -20,
    stagger: 0.15,
    duration: 0.7
    }, "-=0.3")
}
