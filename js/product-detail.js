let quantities = JSON.parse(localStorage.getItem("quantities")) || {
  quantity: 1,
  count: 0,
  total: 0,
};

document.getElementById("cart-total").textContent =
  "$" + quantities.total.toFixed(2);
document.getElementById("cart-count").textContent = quantities.count;

function changequantity(amount) {
  quantities.quantity += amount;
  if (quantities.quantity < 1) {
    quantities.quantity = 1;
  }
  document.getElementById("quantity").textContent = quantities.quantity;
}
function addtocardt() {
  quantities.count += quantities.quantity;
  quantities.total = quantities.count * 17.28;
  document.getElementById("cart-count").textContent = quantities.count;
  document.getElementById("cart-total").textContent =
    "$" + quantities.total.toFixed(2);
  quantities.quantity = 1;
  document.getElementById("quantity").textContent = quantities.quantity;
  localStorage.setItem("quantities", JSON.stringify(quantities));
}

function fillheart(hearid) {
  const heartSvg = document.getElementById(hearid);
  heartSvg.classList.toggle("active");
}

function changeimg(thumbnail) {
  let mainthumbnail = document.getElementById("main_thumbnail");
  mainthumbnail.src = thumbnail.src;

  let thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((img) => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

function changetab(tabid) {
  document
    .querySelectorAll(".tabcontent")
    .forEach((tabcontent) => tabcontent.classList.remove("active"));
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById(tabid).classList.add("active");
  let tabchange = [...document.querySelectorAll(".tab")].find((tab) =>
    tab.textContent.replace(/\s/g, "").toLowerCase().includes(tabid)
  );
  tabchange.classList.add("active");
  if (tabid === "feedback") {
    document
      .querySelector(".product-detail_description_body_right")
      .classList.remove("active");
  } else {
    document
      .querySelector(".product-detail_description_body_right")
      .classList.add("active");
  }
}

function changecolor(logo) {
  document
    .querySelectorAll(".social")
    .forEach((social) => social.classList.remove("active"));
  document
    .querySelectorAll(".background")
    .forEach((background) => background.classList.remove("active"));

  logo.querySelector(".social").classList.add("active");
  logo.querySelector(".background").classList.add("active");
}


// Related Product
$(document).ready(function () {
  $.ajax({
    url: "../assets/products.json",
    method: "GET",
    dataType: "json",
    success: function (products) {
      let container = $("#product-list");

      products.slice(0, 4).forEach((p) => {
        let product = `
                        <div>
                    <img src="${p.image}" alt=${p.name} onclick="window.location.href='http://127.0.0.1:5500/other-pages/product-detail.html'"/>
                    <div class="add-to-wish-list">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                        d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        />
                    </svg>
                    </div>
                    <div class="quick-view">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                        d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        <path
                        d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    </svg>
                    </div>
                    <div class="top-product__feature-product__body">
                    <div><span>${p.name}</span><span>$${p.price}</span></div>
                    <div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M6.20672 8.94066L8.5711 10.4384C8.87335 10.6297 9.24835 10.345 9.15872 9.99216L8.47585 7.30529C8.45656 7.23044 8.45878 7.15168 8.48227 7.07804C8.50575 7.00441 8.54954 6.93889 8.6086 6.88904L10.7288 5.12466C11.0071 4.89291 10.8638 4.43054 10.5057 4.40729L7.7371 4.22729C7.66255 4.222 7.59105 4.19565 7.5309 4.1513C7.47075 4.10695 7.42444 4.04643 7.39735 3.97679L6.3646 1.37654C6.33648 1.30264 6.28656 1.23903 6.22146 1.19416C6.15636 1.14928 6.07916 1.12524 6.0001 1.12524C5.92103 1.12524 5.84383 1.14928 5.77873 1.19416C5.71364 1.23903 5.66372 1.30264 5.6356 1.37654L4.60285 3.97679C4.57581 4.0465 4.52952 4.1071 4.46937 4.15152C4.40922 4.19594 4.33768 4.22234 4.2631 4.22766L1.49447 4.40766C1.13672 4.43054 0.992723 4.89291 1.27135 5.12466L3.3916 6.88941C3.45059 6.93924 3.49434 7.00469 3.51782 7.07825C3.5413 7.15181 3.54356 7.2305 3.52435 7.30529L2.89135 9.79716C2.78372 10.2205 3.2341 10.5622 3.59635 10.3323L5.79385 8.94066C5.85561 8.9014 5.92728 8.88054 6.00047 8.88054C6.07366 8.88054 6.14533 8.9014 6.2071 8.94066H6.20672Z"
                            fill="#FF8A00"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M6.20672 8.94066L8.5711 10.4384C8.87335 10.6297 9.24835 10.345 9.15872 9.99216L8.47585 7.30529C8.45656 7.23044 8.45878 7.15168 8.48227 7.07804C8.50575 7.00441 8.54954 6.93889 8.6086 6.88904L10.7288 5.12466C11.0071 4.89291 10.8638 4.43054 10.5057 4.40729L7.7371 4.22729C7.66255 4.222 7.59105 4.19565 7.5309 4.1513C7.47075 4.10695 7.42444 4.04643 7.39735 3.97679L6.3646 1.37654C6.33648 1.30264 6.28656 1.23903 6.22146 1.19416C6.15636 1.14928 6.07916 1.12524 6.0001 1.12524C5.92103 1.12524 5.84383 1.14928 5.77873 1.19416C5.71364 1.23903 5.66372 1.30264 5.6356 1.37654L4.60285 3.97679C4.57581 4.0465 4.52952 4.1071 4.46937 4.15152C4.40922 4.19594 4.33768 4.22234 4.2631 4.22766L1.49447 4.40766C1.13672 4.43054 0.992723 4.89291 1.27135 5.12466L3.3916 6.88941C3.45059 6.93924 3.49434 7.00469 3.51782 7.07825C3.5413 7.15181 3.54356 7.2305 3.52435 7.30529L2.89135 9.79716C2.78372 10.2205 3.2341 10.5622 3.59635 10.3323L5.79385 8.94066C5.85561 8.9014 5.92728 8.88054 6.00047 8.88054C6.07366 8.88054 6.14533 8.9014 6.2071 8.94066H6.20672Z"
                            fill="#FF8A00"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M6.20672 8.94066L8.5711 10.4384C8.87335 10.6297 9.24835 10.345 9.15872 9.99216L8.47585 7.30529C8.45656 7.23044 8.45878 7.15168 8.48227 7.07804C8.50575 7.00441 8.54954 6.93889 8.6086 6.88904L10.7288 5.12466C11.0071 4.89291 10.8638 4.43054 10.5057 4.40729L7.7371 4.22729C7.66255 4.222 7.59105 4.19565 7.5309 4.1513C7.47075 4.10695 7.42444 4.04643 7.39735 3.97679L6.3646 1.37654C6.33648 1.30264 6.28656 1.23903 6.22146 1.19416C6.15636 1.14928 6.07916 1.12524 6.0001 1.12524C5.92103 1.12524 5.84383 1.14928 5.77873 1.19416C5.71364 1.23903 5.66372 1.30264 5.6356 1.37654L4.60285 3.97679C4.57581 4.0465 4.52952 4.1071 4.46937 4.15152C4.40922 4.19594 4.33768 4.22234 4.2631 4.22766L1.49447 4.40766C1.13672 4.43054 0.992723 4.89291 1.27135 5.12466L3.3916 6.88941C3.45059 6.93924 3.49434 7.00469 3.51782 7.07825C3.5413 7.15181 3.54356 7.2305 3.52435 7.30529L2.89135 9.79716C2.78372 10.2205 3.2341 10.5622 3.59635 10.3323L5.79385 8.94066C5.85561 8.9014 5.92728 8.88054 6.00047 8.88054C6.07366 8.88054 6.14533 8.9014 6.2071 8.94066H6.20672Z"
                            fill="#FF8A00"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M6.20672 8.94066L8.5711 10.4384C8.87335 10.6297 9.24835 10.345 9.15872 9.99216L8.47585 7.30529C8.45656 7.23044 8.45878 7.15168 8.48227 7.07804C8.50575 7.00441 8.54954 6.93889 8.6086 6.88904L10.7288 5.12466C11.0071 4.89291 10.8638 4.43054 10.5057 4.40729L7.7371 4.22729C7.66255 4.222 7.59105 4.19565 7.5309 4.1513C7.47075 4.10695 7.42444 4.04643 7.39735 3.97679L6.3646 1.37654C6.33648 1.30264 6.28656 1.23903 6.22146 1.19416C6.15636 1.14928 6.07916 1.12524 6.0001 1.12524C5.92103 1.12524 5.84383 1.14928 5.77873 1.19416C5.71364 1.23903 5.66372 1.30264 5.6356 1.37654L4.60285 3.97679C4.57581 4.0465 4.52952 4.1071 4.46937 4.15152C4.40922 4.19594 4.33768 4.22234 4.2631 4.22766L1.49447 4.40766C1.13672 4.43054 0.992723 4.89291 1.27135 5.12466L3.3916 6.88941C3.45059 6.93924 3.49434 7.00469 3.51782 7.07825C3.5413 7.15181 3.54356 7.2305 3.52435 7.30529L2.89135 9.79716C2.78372 10.2205 3.2341 10.5622 3.59635 10.3323L5.79385 8.94066C5.85561 8.9014 5.92728 8.88054 6.00047 8.88054C6.07366 8.88054 6.14533 8.9014 6.2071 8.94066H6.20672Z"
                            fill="#FF8A00"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M6.20672 8.94066L8.5711 10.4384C8.87335 10.6297 9.24835 10.345 9.15872 9.99216L8.47585 7.30529C8.45656 7.23044 8.45878 7.15168 8.48227 7.07804C8.50575 7.00441 8.54954 6.93889 8.6086 6.88904L10.7288 5.12466C11.0071 4.89291 10.8638 4.43054 10.5057 4.40729L7.7371 4.22729C7.66255 4.222 7.59105 4.19565 7.5309 4.1513C7.47075 4.10695 7.42444 4.04643 7.39735 3.97679L6.3646 1.37654C6.33648 1.30264 6.28656 1.23903 6.22146 1.19416C6.15636 1.14928 6.07916 1.12524 6.0001 1.12524C5.92103 1.12524 5.84383 1.14928 5.77873 1.19416C5.71364 1.23903 5.66372 1.30264 5.6356 1.37654L4.60285 3.97679C4.57581 4.0465 4.52952 4.1071 4.46937 4.15152C4.40922 4.19594 4.33768 4.22234 4.2631 4.22766L1.49447 4.40766C1.13672 4.43054 0.992723 4.89291 1.27135 5.12466L3.3916 6.88941C3.45059 6.93924 3.49434 7.00469 3.51782 7.07825C3.5413 7.15181 3.54356 7.2305 3.52435 7.30529L2.89135 9.79716C2.78372 10.2205 3.2341 10.5622 3.59635 10.3323L5.79385 8.94066C5.85561 8.9014 5.92728 8.88054 6.00047 8.88054C6.07366 8.88054 6.14533 8.9014 6.2071 8.94066H6.20672Z"
                            fill="currentColor"
                        />
                        </svg>
                    </div>
                    <div class="add-to-cart">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        >
                        <path
                            d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                            stroke="currentColor"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </div>
                    </div>
                </div>
            `;
        container.append(product);
      });
    },
    error: function (err) {
      console.error(err);
    },
  });
});
