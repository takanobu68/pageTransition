const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  document.addEventListener("mousewheel", noScroll, { passive: false });
  test();
});

function test() {
  anime({
    targets: ".container",
    translateZ: [
      { value: -500, duration: 1000 },
      { value: 500, duration: 1500 },
    ],
    rotate: "720deg",
    duration: 2500,
    easing: "linear",
    complete: function () {
      setTimeout(() => (location.href = "./work.html"), 10);
    },
  });
}

function noScroll(event) {
  event.preventDefault();
}
