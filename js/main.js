//   readMore
function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  // Переключаем видимость текста
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btn.textContent = "Скрыть";
  } else {
    moreText.classList.add("hidden");
    btn.textContent = "Читать больше";
  }
}
