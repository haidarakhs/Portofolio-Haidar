const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});


// marque
const marqueeElement = document.getElementById('marquee');
const surah = [
 'PORTOFLIO  · PORTOFLIO  · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO  · PORTOFLIO  · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO · PORTOFLIO   '
];

// Generate HTML for the marquee
const marqueeContent = surah.map(verse => `<span>${verse}</span>`).join('');
marqueeElement.innerHTML = marqueeContent;



