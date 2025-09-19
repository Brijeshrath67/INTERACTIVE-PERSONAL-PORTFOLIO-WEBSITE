// Simple smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing effect (optional)
const text = "Frontend Developer | Learner | Designer";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
document.querySelector(".hero p").innerHTML = "";
typing();