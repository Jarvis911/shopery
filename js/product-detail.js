let quantities = JSON.parse(localStorage.getItem('quantities')) ||
{
  quantity: 1,
  count: 0,
  total: 0
};

document.getElementById('cart-total').textContent = '$' + quantities.total.toFixed(2);
document.getElementById('cart-count').textContent = quantities.count;

function changequantity(amount) {
  quantities.quantity += amount;
  if (quantities.quantity < 1) {
    quantities.quantity = 1;
  }
  document.getElementById('quantity').textContent = quantities.quantity


}
function addtocardt() {
  quantities.count += quantities.quantity;
  quantities.total = quantities.count * 17.28;
  document.getElementById('cart-count').textContent = quantities.count;
  document.getElementById('cart-total').textContent = '$' + quantities.total.toFixed(2);
  quantities.quantity = 1;
  document.getElementById('quantity').textContent = quantities.quantity;
  localStorage.setItem('quantities', JSON.stringify(quantities));


}

function fillheart(hearid) {
  const heartSvg = document.getElementById(hearid);
  heartSvg.classList.toggle('active');

  /*if (heartSvg.classList.contains('active')) {
heartSvg.classList.remove('active');
} else {
heartSvg.classList.add('active');
}*/
}


function changeimg(thumbnail) {
  let mainthumbnail = document.getElementById("main_thumbnail")
  mainthumbnail.src = thumbnail.src;

  let thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(img => img.classList.remove("active"));
  thumbnail.classList.add("active");

}

function changetab(tabid) {
  document.querySelectorAll(".tabcontent").forEach(tabcontent => tabcontent.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabid).classList.add("active");
  let tabchange = [...document.querySelectorAll(".tab")].find(tab => tab.textContent.replace(/\s/g, '').toLowerCase().includes(tabid));
  tabchange.classList.add("active");
  if (tabid === 'feedback') {
    document.querySelector(".product-detail_description_body_right").classList.remove('active');
  }
  else {
    document.querySelector(".product-detail_description_body_right").classList.add('active');
  }
}

function changecolor(logo) 
{
document.querySelectorAll(".social").forEach(social => social.classList.remove("active"));
  document.querySelectorAll(".background").forEach(background => background.classList.remove("active"));
  
  logo.querySelector(".social").classList.add("active");
  logo.querySelector(".background").classList.add("active");
}