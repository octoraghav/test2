// Function for the Review Box
function submitReview() {
    const name = document.getElementById("reviewerName").value;
    const text = document.getElementById("reviewText").value;
    const status = document.getElementById("reviewStatus");

    if (name && text) {
        status.textContent = `Thank you, ${name}! Your review has been "saved".`;
        status.style.color = "#afffaf";
        // Clear inputs
        document.getElementById("reviewerName").value = "";
        document.getElementById("reviewText").value = "";
    } else {
        status.textContent = "Please fill in both fields!";
        status.style.color = "#ffafaf";
    }
}

// Fade-in effect for cards
const cards = document.querySelectorAll('.glass');

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.8s ease-out";

    // Trigger animation when page loads
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});