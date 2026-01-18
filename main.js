const showMoreBtn = document.getElementById("show-more-btn");
const showLessBtn = document.getElementById("show-less-btn");


showMoreBtn.addEventListener("click", ()=> {
    const fullContent = document.getElementById("full-content");
    fullContent.classList.remove("hidden");

    showMoreBtn.classList.add("hidden");
    showLessBtn.classList.remove("hidden");
});

showLessBtn.addEventListener("click", ()=> {
    const fullContent = document.getElementById("full-content");
    fullContent.classList.add("hidden");

    showMoreBtn.classList.remove("hidden");
    showLessBtn.classList.add("hidden");
})

//

const showMoreBtnProfile = document.getElementById("show-more-btn_profile");
const showLessBtnProfile = document.getElementById("show-less-btn_profile");
const fullContentProfile = document.getElementById("full-content_profile");

showMoreBtnProfile.addEventListener("click", () => {
    fullContentProfile.classList.remove("hidden");

    showMoreBtnProfile.classList.add("hidden");
    showLessBtnProfile.classList.remove("hidden");
});

showLessBtnProfile.addEventListener("click", () => {
    fullContentProfile.classList.add("hidden");

    showMoreBtnProfile.classList.remove("hidden");
    showLessBtnProfile.classList.add("hidden");
});
