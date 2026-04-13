export function stackAnimation() {
    console.log("Stack animation initialized");

    const StackTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".stack-section",
            start: "top 70%",
            once: true
        }
    });

     StackTL.from(".stack-card", {
    opacity: 0,
    y: 40,
    scale: 0.95,
    stagger: {
      amount: 0.8,
      grid: "auto",
      from: "start"
    },
    duration: 0.8
  }, "-=0.2");
}