document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function() {
      if (this.wasChecked) {
        this.checked = false;
      }
      this.wasChecked = this.checked;
    });
  });