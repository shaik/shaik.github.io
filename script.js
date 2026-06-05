// Premium radial cursor tracking spotlight effect on cards
function setupCardGlowEffect() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
}

// Run initial execution
document.addEventListener("DOMContentLoaded", setupCardGlowEffect);
setupCardGlowEffect();
