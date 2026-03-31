
const detailsBlocks = document.querySelectorAll(".about-details");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

detailsBlocks.forEach((details) => {
	const summary = details.querySelector("summary");

	if (!summary) {
		return;
	}

	let animation = null;
	let isClosing = false;
	let isExpanding = false;

	const onAnimationFinish = (open) => {
		details.open = open;
		animation = null;
		isClosing = false;
		isExpanding = false;
		details.style.height = "";
		details.style.overflow = "";
	};

	const closeDetails = () => {
		isClosing = true;

		const startHeight = `${details.offsetHeight}px`;
		const endHeight = `${summary.offsetHeight}px`;

		if (animation) {
			animation.cancel();
		}

		animation = details.animate(
			{
				height: [startHeight, endHeight],
			},
			{
				duration: 320,
				easing: "ease-out",
			},
		);

		animation.onfinish = () => onAnimationFinish(false);
		animation.oncancel = () => {
			isClosing = false;
		};
	};

	const expandDetails = (startHeight) => {
		isExpanding = true;

		const endHeight = `${details.offsetHeight}px`;

		if (animation) {
			animation.cancel();
		}

		animation = details.animate(
			{
				height: [startHeight, endHeight],
			},
			{
				duration: 360,
				easing: "ease-out",
			},
		);

		animation.onfinish = () => onAnimationFinish(true);
		animation.oncancel = () => {
			isExpanding = false;
		};
	};

	const openDetails = () => {
		const startHeight = `${details.offsetHeight}px`;
		details.open = true;

		requestAnimationFrame(() => {
			expandDetails(startHeight);
		});
	};

	summary.addEventListener("click", (event) => {
		if (prefersReducedMotion) {
			return;
		}

		event.preventDefault();
		details.style.overflow = "hidden";

		if (isClosing || !details.open) {
			openDetails();
			return;
		}

		if (isExpanding || details.open) {
			closeDetails();
		}
	});
});


const openButton = document.getElementById("open-button");
const contactForm = document.getElementById("contact-form");