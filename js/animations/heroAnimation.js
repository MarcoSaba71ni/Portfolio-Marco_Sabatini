
export function heroAnimation() {
    console.log("Hero animation initialized");
const HeroTL = gsap.timeline({
    delay: 0.3 // 
});

HeroTL.from(".hero-title", {
    opacity: 0,
    scale: 0.75,
    y:60,
    duration: 1 
})
.from(".hero-subtitle", {
    opacity: 0,
    y: 30
}, "-=0.5")
.from(".hero-left > *", {
    opacity: 0,
    x: 40,
    stagger: 0.15
}, "-=0.3")
.from(".hero-right > *:not(.hero-title):not(.hero-subtitle)", {
    opacity: 0,
    x: 40,
    stagger: 0.2
}, "-=0.5")

};