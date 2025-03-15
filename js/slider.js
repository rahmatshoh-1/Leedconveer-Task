document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.getElementById("slider");
  const navDots = document.getElementById("navDots");
  let currentSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add(
      "dot",
      "w-4",
      "h-4",
      "rounded-full",
      "cursor-pointer",
      "transition-all"
    );
    dot.classList.add(index === 0 ? "bg-orange-500" : "bg-[#DBDBDB]");
    dot.addEventListener("click", () => goToSlide(index));
    navDots.appendChild(dot);
  });

  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("bg-orange-500", i === index);
      dot.classList.toggle("bg-[#DBDBDB]", i !== index);
    });
    currentSlide = index;
  }
});
