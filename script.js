document.addEventListener("DOMContentLoaded", (event) => {
  // cal the window size to know the amout of offsetx to u
  let parallax_X = window.innerWidth > 1440 ? "40vw" : "35vw";

  // scrollTrigger container for site_title_logo animation

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

  // hero section

  // hero section timeline

  let Herosection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_section",
      start: "top 40%",
      ease: "expoScale(0.5,7,none)",
      delay: 5,
    },
  });

  // timeline for the tag
  Herosection_tl.from(
    "#left_tag",
    {
      width: "0px",
      paddingInline: 0,
      duration: 2,
    },
    "tag"
  );
  Herosection_tl.from(
    "#right_tag",
    {
      width: "0px",
      paddingInline: 0,
      duration: 2,
    },
    "tag"
  );

  // heroSection header Text splits animation

  let heroHeaderTextSplit = SplitText.create(".Hero_text_header", {
    type: "words, chars, lines",
  });

  Herosection_tl.from(
    heroHeaderTextSplit.lines,
    {
      rotationX: -50,
      transformOrigin: "50% 50% -160px",
      duration: 0.8,
      autoAlpha: 0,
      ease: "power3",
      stagger: 0.25,
    },
    "tag"
  );

  let char = SplitText.create(".hero_details", { type: "words, chars" });
  Herosection_tl.from(
    char.chars,
    {
      x: 150,
      opacity: 0,
      duration: 0.2,
      ease: "power4",
      stagger: 0.01,
    },
    "tag"
  );

  // hero floating image
  gsap.from("#floating_img1", {
    y: 10,
    scale: 0.95,
    repeat: -1,
    yoyo: true,
    yoyo: 2,
    duration: 4,
    repeatDelay: 1,
    yoyoEase: "power1.in",
  });
  gsap.from("#floating_img2", {
    scale: 0.9,
    repeat: -1,
    yoyo: true,
    duration: 4,
    repeatDelay: 1,
    yoyoEase: "power1.in",
  });
  // making the floating image dragable
  Draggable.create(".top_tags", {
    bounds: ".hero_section",
  });
});
// hero Image
gsap.to(".hero_bottom video", {
  width: "80%",
  borderRadius: "10px",
  duration: 2.5,
  scrollTrigger: {
    trigger: ".hero_bottom",
    start: "top 50%",
    end: "top 30%",
    invalidateOnRefresh: true,
    scrub: 2,
    ease: "expoScale(0.5,7,none)",
  },
});
