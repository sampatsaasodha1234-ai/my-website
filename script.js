function showMessage() {
    document.getElementById("message").innerText =
        "JavaScript bhi kaam kar raha hai! 🚀";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("modeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {
    const topButton = document.getElementById("topButton");

    if (window.scrollY > 300) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
});