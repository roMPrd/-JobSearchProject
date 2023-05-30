import { Controller } from "@hotwired/stimulus"


gsap.registerPlugin(Flip);
console.log("hello from gsap controller")

const links = document.querySelectorAll(".nav-links a");
const activeNav = document.querySelector(".active-nav");

console.log(links);
console.log(activeNav);

links.forEach((link) => {
  link.addEventListener("click", () => {
    // turn navs blue
    gsap.to(links, {color: "#252525"});
    if (document.activeElement === link) {
      gsap.to(link, {color: "#385ae0"});
    }

    // move active nav
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1, 0.5)",
    });
  });
});
