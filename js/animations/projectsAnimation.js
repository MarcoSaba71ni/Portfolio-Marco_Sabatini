export function projectsAnimation() {
	console.log("Projects animation initialized");

	const cards = document.querySelectorAll(".projects-section article");

	if (!cards.length) {
		return;
	}

	gsap.from(cards, {
		scrollTrigger: {
			trigger: ".projects-section",
			start: "top 75%",
			once: true,
		},
		opacity: 0,
		y: 36,
		duration: 0.8,
		stagger: 0.16,
		ease: "power2.out",
	});
}
