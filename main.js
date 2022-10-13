hoverEffect();

function hoverEffect() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const position = {
      x: 0,
      y: 0,
    };
    card.addEventListener("mousemove", function (e) {
      const circle = this.querySelector("circle");
      circle.style.setProperty("--y", e.offsetY + "px");
      circle.style.setProperty("--x", e.offsetX + "px");
    });

    card.addEventListener("mouseenter", function () {
      const circle = this.querySelector("circle");
      circle.style.setProperty("--r", 400 + "px");
    });

    card.addEventListener("mouseleave", function () {
      const circle = this.querySelector("circle");
      circle.style.setProperty("--r", 0 + "px");
    });
  });
}
