document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function() {
      if (this.wasChecked) {
        this.checked = false;
      }
      this.wasChecked = this.checked;
    });
  });

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});