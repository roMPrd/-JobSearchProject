import { Controller } from "@hotwired/stimulus"

// function gsap () {
//   console.log("page is fully loaded");
//   console.log("hello from gsap controller")
//   gsap.registerPlugin(Flip);
//   console.log("hello from gsap/flip controller")

//   const links = document.querySelectorAll(".nav-links a");
//   const activeNav = document.querySelector(".active-nav");

//   console.log(links);
//   console.log(activeNav);

//   links.forEach((link) => {
//     link.addEventListener("click", () => {
//       // turn navs blue
//       gsap.to(links, {color: "#252525"});
//       if (document.activeElement === link) {
//         gsap.to(link, {color: "#385ae0"});
//       }

//       // move active nav
//       const state = Flip.getState(activeNav);
//       link.appendChild(activeNav);
//       Flip.from(state, {
//         duration: 1.25,
//         absolute: true,
//         ease: "elastic.out(1, 0.5)",
//       });
//     });
//   });
// }
// window.onload = gsap();

// window.onload = () => {
//   console.log("page is fully loaded");
//   console.log("hello from gsap controller")
//   gsap.registerPlugin(Flip);
//   console.log("hello from gsap/flip controller")

//   const links = document.querySelectorAll(".nav-links a");
//   const activeNav = document.querySelector(".active-nav");

//   console.log(links);
//   console.log(activeNav);

//   links.forEach((link) => {
//     link.addEventListener("click", () => {
//       // turn navs blue
//       gsap.to(links, {color: "#252525"});
//       if (document.activeElement === link) {
//         gsap.to(link, {color: "#385ae0"});
//       }

//       // move active nav
//       const state = Flip.getState(activeNav);
//       link.appendChild(activeNav);
//       Flip.from(state, {
//         lazy: false,
//         duration: 1.25,
//         absolute: true,
//         ease: "elastic.out(1, 0.5)",
//       });
//     });
//   });
// };

// Connects to data-controller="gsap"

export default class extends Controller {
  connect() {
    // console.log("Hello, Stimulus!", this.element)
    console.log("hello from gsap controller")
    const links = document.querySelectorAll(".nav-links a");
    const activeNav = document.querySelector(".active-nav");
  }

  navbarAnimation() {
    console.log("hello from navbarAnimation controller")

    const links = document.querySelectorAll(".nav-links a");
    const activeNav = document.querySelector(".active-nav");

    gsap.registerPlugin(Flip);

    console.log(links);
    console.log(activeNav);

    // links.forEach((link) => {
    //   // turn navs blue
    //   gsap.to(links, {color: "#252525"});
    //   if (document.activeElement === link) {
    //     gsap.to(link, {color: "#385ae0"});
    //   }

    //   // move active nav
    //   const state = Flip.getState(activeNav);
    //   link.appendChild(activeNav);
    //   Flip.from(state, {
    //     duration: 1.25,
    //     absolute: true,
    //     ease: "elastic.out(1, 0.5)",
    //   });
    // });

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
  }
}

// export default class extends Controller {
//   connect() {
//     window.onload = () => {
//       console.log("page is fully loaded");
//       console.log("hello from gsap controller")
//       gsap.registerPlugin(Flip);
//       console.log("hello from gsap/flip controller")

//       const links = document.querySelectorAll(".nav-links a");
//       const activeNav = document.querySelector(".active-nav");

//       console.log(links);
//       console.log(activeNav);

//       links.forEach((link) => {
//         link.addEventListener("click", () => {
//           // turn navs blue
//           gsap.to(links, {color: "#252525"});
//           if (document.activeElement === link) {
//             gsap.to(link, {color: "#385ae0"});
//           }

//           // move active nav
//           const state = Flip.getState(activeNav);
//           link.appendChild(activeNav);
//           Flip.from(state, {
//             lazy: false,
//             duration: 1.25,
//             absolute: true,
//             ease: "elastic.out(1, 0.5)",
//           });
//         });
//       });
//     };
//   }
// }
