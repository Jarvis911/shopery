document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function() {
      if (this.wasChecked) {
        this.checked = false;
      }
      this.wasChecked = this.checked;
    });
  });

   document.getElementById("billingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      company: document.getElementById("company").value,
      address: document.getElementById("address").value,
      country: document.getElementById("country").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    };

    localStorage.setItem("billingInfo", JSON.stringify(data));
    alert("Thông tin đã được lưu vào localStorage!");
    

    this.reset();  
  });