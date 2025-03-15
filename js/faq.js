function toggleFAQ(id) {
  const faq = document.getElementById(`faq${id}`);
  faq.classList.toggle("hidden");
  const image = document.getElementById(`faq-image${id}`);
  if (faq.classList.contains("hidden")) {
    image.src = "../images/plus.png"; // Исходное изображение
  } else {
    image.src = "../images/minus.png"; // Изображение при открытом FAQ
  }
}
