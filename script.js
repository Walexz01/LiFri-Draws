document.addEventListener("DOMContentLoaded", (event) => {
  let parallax_X = window.innerWidth > 1440 ? "40vw" : "35vw";
  console.log(parallax_X);
  gsap.fromTo(
    ".site_title",
    { y: -180, x: parallax_X, color: "#ffff", scale: 2.5 },
    {
      y: 0,
      x: 0,
      scale: 1,
      color: "#1d1d1d",
      scrollTrigger: {
        trigger: ".site_title",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)",
      },
    }
  );
});
