const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  // const el = document.createElement("div");
  // el.textContent = "テスト";
  // container.appendChild(el);
  document.addEventListener("mousewheel", noScroll, { passive: false });
  test();
  // setTimeout(() => (location.href = "./work.html"), 3000);
});

// function anime() {}

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
// test();

// function con() {
//   console.log(true);
// }

function noScroll(event) {
  event.preventDefault();
}
