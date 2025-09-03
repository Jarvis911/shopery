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

// Updating 
const quantities = JSON.parse(localStorage.getItem("quantities")) || {
  quantity: 1,
  count: 0,
  total: 0
};

const productList = document.querySelector(".product-checkout-list");
productList.insertAdjacentHTML(
"beforeend",
`
  <div>
      <div>
        <img alt="list" src="../assets/images/slide.jpg">
        <span>Chinese Cabbage</span>
        <span>x${quantities.count}</span>
      </div>
      <span>$${quantities.total.toFixed(2)}</span>
    </div>
`);

const subtotal = document.querySelector(".total-shipping div:nth-child(1) span:nth-child(2)");
const total = document.querySelector(".total-shipping div:nth-child(5) span:nth-child(2)");

quantities.count += 140;
quantities.total += 140;

subtotal.textContent = "$" + quantities.total.toFixed(2);
total.textContent = "$" + quantities.total.toFixed(2);



// Validate form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  let messages = [];

  form.querySelectorAll("input, select").forEach((input) => {
    input.style.border = "";
  })

  const firstName = form.querySelector("#first-name");
  const lastName = form.querySelector('#last-name');
  const companyName = form.querySelector('#company-name');
  const streetAddress = form.querySelector('#street-address');
  const selectCountry = form.querySelector('#select-country');
  const selectState = form.querySelector('#select-state');
  const zipCode = form.querySelector('#zip-code');
  const emailAddress = form.querySelector('#email-address');
  const phoneNumber = form.querySelector('#phone-number');
  const ship = form.querySelector('#ship');
  const additionalInfo = form.querySelector('#additional-info');

  const data = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    companyName: companyName.value.trim(),
    streetAddress: streetAddress.value.trim(),
    selectCountry: selectCountry.value,
    selectState: selectCountry.value,
    zipCode: zipCode.value.trim(),
    emailAddress: emailAddress.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    ship: ship.value,
    additionalInfo: additionalInfo.value.trim()
  }

  function markError(element, msg) {
    isValid = false;
    messages.push(msg);
    element.style.border = "1px solid red";
  }

  if (!data.firstName) markError(firstName, "First name is required!");
  if (!data.lastName) markError(lastName, "Last name is required!");
  if (!data.streetAddress) markError(streetAddress, "Address is required");
  if (!data.selectCountry) markError(selectCountry, "Country is required");
  if (!data.selectState) markError(selectState, "State is required");
  if (!data.zipCode) markError(zipCode, "Zip code is required");
  if (!data.phoneNumber) markError(phoneNumber, "Phone number is required!");
  if (!data.emailAddress) markError(emailAddress, "Email is required!");

  if (!isValid) {
    alert(messages.join("\n"));
  } else {
    localStorage.setItem("orderInfo", JSON.stringify(data));
    alert("Your order has been received!");
    form.submit();

    localStorage.setItem("quantities", JSON.stringify({"quantity": 1, "count": 0, "total": 0}));
  }
})
