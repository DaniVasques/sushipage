
const tl = gsap.timeline({
  defaults: {
    duration: 0.8,
    ease: "power3.out"
  }
});

gsap.to(".image-hero img", {
    rotate: 360,
    duration: 40,
    ease: "none",
    repeat: -1
});

tl.from("header", {
  y: -80,
  opacity: 0
})

tl.from(".content-hero h1", {
  x: -100,
  opacity: 0
})

tl.from(".content-hero h2", {
  x: -80,
  opacity: 0
}, "-=0.4")

tl.from(".divisor", {
  width: 0,
  opacity: 0
}, "-=0.3")

tl.from(".content-hero p", {
  y: 30,
  opacity: 0
}, "-=0.3")

tl.from(".ctas a", {
    y: 40,
    opacity: 0,
    scale: 0.8,
    stagger: 0.25,
    duration: 0.7,
    ease: "back.out(2)"
}, "-=0.2")

tl.from(".image-hero img", {
  scale: 0.5,
  rotate: -20,
  opacity: 0,
  duration: 1
}, "-=0.5")

tl.from(".review", {
  scale: 0,
  opacity: 0,
  duration: 0.6
}, "-=0.4");

gsap.from(".btn-delivery", {
    scale: 1.05,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.from(".btn-reserva", {
    boxShadow: "0 0 20px #FFD900",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

