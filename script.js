document.addEventListener("DOMContentLoaded", (event) => {
  // resposive naV
  let navIcon = document.getElementById("navIcon");
  let menuList = document.getElementById("menuList");
  menuList.style.maxHeight = "0px";

  navIcon.addEventListener("click", () => {
    if (menuList.style.maxHeight == "0px") {
      menuList.style.maxHeight = "400px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  });

  // cal the window size to know the amout of offsetx to u
  let parallax_X = window.innerWidth > 1440 ? "40vw" : "35vw";
  let parallax_scale = window.innerWidth > 450 ? 2.5 : 2;
  // scrollTrigger container for site_title_logo animation

  gsap.fromTo(
    ".site_title",
    { y: -180, x: parallax_X, color: "#ffff", scale: parallax_scale },
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
  const vw_hero_img = window.innerWidth > 768 ? "80%" : "95%";
  // hero Image
  gsap.to(".hero_bottom video", {
    width: vw_hero_img,
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
  // home_about section
  let aboutSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about_section",
      start: "top 60%",
      ease: "expoScale(0.5,7,none)",
      delay: 2,
    },
  });

  aboutSection_tl.from(
    "#about_section_head",
    {
      width: 0,
      duration: 2,
      paddingInline: 0,
    },
    "aboutheadTag"
  );

  // aboustSection header Text splits animation

  let aboutsubhead = SplitText.create("#about_section_subhead", {
    type: "words, chars, lines",
  });

  aboutSection_tl.from(
    aboutsubhead.lines,
    {
      rotationX: -20,
      transformOrigin: "50% 50% -160px",
      duration: 1.5,
      autoAlpha: 0,
      ease: "power3",
      stagger: 0.25,
    },
    "aboutheadTag+=0.2"
  );
  let aboustDescription = SplitText.create(".about_section_description", {
    type: "words, chars",
  });
  aboutSection_tl.from(
    aboustDescription.chars,
    {
      x: 150,
      opacity: 0,
      duration: 0.2,
      ease: "power4",
      stagger: 0.01,
    },
    "aboutheadTag+=0.5"
  );
  gsap.to(".about_image_card img", {
    scale: 0.9,
    // yoyo: true,
    // repeat: -1,
    duration: 3,
    scrollTrigger: {
      trigger: ".about_image_card",
      start: "top 40%",
      ease: "expoScale(0.5,7,none)",
      delay: 2,
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });
  // services section
  let serviceSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#service_section",
      start: "top 60%",
      ease: "expoScale(0.5,7,none)",
      delay: 1,
    },
  });

  serviceSection_tl.from(
    "#service_section_head",
    {
      width: 0,
      duration: 2,
      paddingInline: 0,
    },
    "serviceheadTag"
  );
  // aboustSection header Text splits animation

  let servicesubhead = SplitText.create("#service_section_subhead", {
    type: "words, chars, lines",
  });

  serviceSection_tl.from(
    servicesubhead.lines,
    {
      rotationX: -20,
      transformOrigin: "50% 50% -160px",
      duration: 1.5,
      autoAlpha: 0,
      ease: "power3",
      stagger: 0.25,
    },
    "serviceheadTag+=0.2"
  );
  let serviceDescription = SplitText.create("#service_section_description p", {
    type: "words, chars",
  });
  serviceSection_tl.from(
    serviceDescription.chars,
    {
      x: 150,
      opacity: 0,
      duration: 0.1,
      ease: "power4",
      stagger: 0.01,
    },
    "serviceheadTag+=0.5"
  );
  // service_section card
  let serviceCard1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#service_card1",
      start: "top 60%",
      end: "top 40%",
      ease: "expoScale(0.5,7,none)",
      delay: 1,
      invalidateOnRefresh: true,
    },
  });
  serviceCard1Tl.from(
    "#service_card1 .service_card_left",
    {
      x: -900,
      duration: 2,
    },
    "HomeserviceCard"
  );
  serviceCard1Tl.from(
    "#service_card1 .service_card_right",
    {
      x: 900,
      duration: 2,
    },
    "HomeserviceCard"
  );

  let serviceCard2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#service_card2",
      start: "top 60%",
      end: "top 40%",
      ease: "expoScale(0.5,7,none)",
      delay: 1,
      invalidateOnRefresh: true,
    },
  });
  serviceCard2Tl.from(
    "#service_card2 .service_card_left",
    {
      x: 900,
      duration: 2,
    },
    "HomeserviceCard2"
  );
  serviceCard2Tl.from(
    "#service_card2 .service_card_right",
    {
      x: -900,
      duration: 2,
    },
    "HomeserviceCard2"
  );

  // ============= project list animation====
  let project_img_lists = gsap.utils.toArray(".project_list_imgs");

  project_img_lists.forEach((list) => {
    const list_img_array = list.querySelectorAll(".list_img");

    list_img_array.forEach((list_img) => {
      gsap.to(list_img, {
        y: -200,
        duration: 2,
        scrollTrigger: {
          trigger: list_img,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 4,
        },
      });
    });
  });
  // change project text
  let projectSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#project_section",
      start: "top 60%",
      ease: "expoScale(0.5,7,none)",
      delay: 1,
    },
  });

  projectSection_tl.from(
    "#project_section_head",
    {
      width: 0,
      duration: 2,
      paddingInline: 0,
    },
    "projectheadTag"
  );
  // projectSection header Text splits animation

  let projectsubhead = SplitText.create("#project_section_subhead", {
    type: "words, chars, lines",
  });

  projectSection_tl.from(
    projectsubhead.lines,
    {
      rotationX: -20,
      transformOrigin: "50% 50% -160px",
      duration: 1.5,
      autoAlpha: 0,
      ease: "power3",
      stagger: 0.25,
    },
    "projectheadTag+=0.2"
  );
  let projectDescription = SplitText.create("#project_section_description p", {
    type: "words, chars",
  });
  projectSection_tl.from(
    projectDescription.chars,
    {
      x: 150,
      opacity: 0,
      duration: 0.1,
      ease: "power4",
      stagger: 0.01,
    },
    "projectheadTag+=0.5"
  );

  const project_Title = document.querySelector(".list_title h2");

  function updateProjectTitle(index) {
    const titleTexts = ["Illustration", "Animation"];
    project_Title.textContent = titleTexts[index];
  }

  let project_h2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project_bottom",
      start: "top 10%",
      end: "top 50%",
      scrub: 2,
      ease: "ease",
      onEnter: () => {
        gsap.set(project_Title, {
          position: "fixed",
          opacity: "0.5",
          bottom: "40%",
        });
      },
      onEnterBack: () => {
        gsap.set(project_Title, {
          position: "relative",
          bottom: "0",
          opacity: "1",
        });
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: "#animation_project_list",
      start: "bottom 65%",
      end: "bottom 65%",
      scrub: 2,
      ease: "ease",
      onLeave: () => {
        gsap.set(project_Title, {
          opacity: 0,
        });
      },
      onLeaveBack: () => {
        gsap.set(project_Title, {
          opacity: 0.5,
        });
      },
    },
  });

  project_img_lists.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 40%",
      end: "top 20%",
      onEnter: () => {
        updateProjectTitle(i);
      },
      onEnterBack: () => {
        updateProjectTitle(i);
      },
    });
  });
  updateProjectTitle(0);
  // contact section
  let contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact_section",
      start: "top 60%",
      ease: "expoScale(0.5,7,none)",
      delay: 2,
    },
  });
  const contact_header2 = document.querySelector(".contact_top h2");
  const contact_header3 = document.querySelector(".contact_top h3");
  const contact_headers = [contact_header2, contact_header3];

  contact_headers.forEach((header, i) => {
    let contacthead = SplitText.create(header, {
      type: "words, chars, lines",
    });

    contactTl.from(
      contacthead.lines,
      {
        rotationX: -20,
        transformOrigin: "50% 50% -160px",
        duration: 2,
        autoAlpha: 0,
        ease: "power3",
        stagger: 0.3,
      },
      i == 0 ? "contacthead" : "contacthead+=0.5"
    );
  });

  //end
});
