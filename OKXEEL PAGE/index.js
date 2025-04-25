"use script";

const backgrounds = [
  "url('head1.jpg')",
  "url('head2.jpg')",
  "url('head3.jpg')",
  "url('head4.jpg')",
];

const headText = [
  "OKXEEL--Wear the future",
  "Redefine your style with--OKXEEL",
  "OKXEEL--Where fashion meets identity",
  "Unleash bold looks with--OKXEEL",
];

const subText = [
  "Step into a new era of fashion with OKXEEL, where every stitch is inspired by innovation. Our designs blend futuristic aesthetics with everyday functionality, making you look ahead while staying grounded in comfort",

  "OKXEEL is here to transform your wardrobe and elevate your presence. Our pieces are crafted for individuals who crave bold, unique styles that push boundaries and make every outfit unforgettable",

  "At OKXEEL, we believe clothes should reflect who you are. Our collections are designed to express your individuality, culture, and mindset through fashion that speaks louder than words",

  "OKXEEL dares you to stand out. From edgy streetwear to sleek urban fits, our pieces are curated to unleash the boldest version of you. No more hiding—let your outfit do the talking",
];

let head = 0;
function changeBackground() {
  head = (head + 1) % backgrounds.length;
  const main = document.getElementById("main");
  const con = document.querySelector(".content");
  main.style.backgroundImage = backgrounds[head];
  main.classList.remove("fold");
  main.classList.add("fade");
  setTimeout(() => {
    main.classList.remove("fade");
    main.classList.add("fold");
  }, 10000);
  document.getElementById("headText").textContent = headText[head];
  document.getElementById("subText").textContent = subText[head];
}
setInterval(changeBackground, 13000);

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("nav-heading");
  const fix = document.querySelector(".scroll");
  const navHead = document.querySelector(".nav-head");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY < 200) {
      const scale = 1 - scrollY / 500;
      const opacity = 1 - scrollY / 200;
      main.style.transform = `scale(${scale})`;
      main.style.opacity = opacity;
      fix.classList.remove("visible");
      navHead.style.display = "block";
    } else {
      fix.classList.add("visible");
      navHead.style.display = "none";
    }
  });
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const onlineBtn = document.querySelector(".online");

  // When clicked, open WhatsApp
  onlineBtn.addEventListener("click", () => {
    window.open(
      "https://wa.me/23409119560546?text=Hello%20Okxeel%20Clothing",
      "_blank"
    );
  });
});

const prevButtonEls = document.querySelectorAll(".prev");
const nextButtonEls = document.querySelectorAll(".next");

const active = {
  list0: 0,
  list1: 0,
  list2: 0,
  list3: 0,
  list4: 0,
  list5: 0,
};
prevButtonEls.forEach(btn =>
  btn.addEventListener("click", () => slide(btn, -1))
);
nextButtonEls.forEach(btn =>
  btn.addEventListener("click", () => slide(btn, 1))
);

function slide(btnEl, offset) {
  const listId = btnEl.closest(".slid").querySelector(".list").dataset.listid;

  active[`list${listId}`] += offset;
  if (active[`list${listId}`] < 0) {
    active[`list${listId}`] = 4;
  } else if (active[`list${listId}`] > 4) {
    active[`list${listId}`] = 0;
  }

  const newLeft = `${active[`list${listId}`] * -300}px`;

  btnEl.closest(".slid").querySelector(".items").style.left = newLeft;

  btnEl
    .closest(".slid")
    .querySelectorAll("li")
    .forEach((dot, i) => {
      if (i === active[`list${listId}`]) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
}

const clicks = document.querySelector(".click");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const links = document.querySelector(".click-links");
open.addEventListener("click", function (e) {
  links.classList.remove("hidden");
  clicks.style.display = "block";
  clicks.style.animation = "happy";
  close.style.display = "block";
  close.style.display = "block";
  open.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (
    !clicks.contains(e.target) &&
    !links.contains(e.target) &&
    e.target == open
  ) {
    links.classList.add("hidden");
    clicks.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    clicks.style.animation = "happy";
  }
});

close.addEventListener("click", function (e) {
  links.classList.add("hidden");
  clicks.style.display = "none";

  clicks.style.animation = "happy";
  close.style.display = "none";
  open.style.display = "block";
});
