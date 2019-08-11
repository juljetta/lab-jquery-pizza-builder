// Write your Pizza Builder JavaScript in this file.
function addPrice(price) {
  var totalPrice = $("#total-price > span");
  var newTotalPrice = Number(totalPrice.html()) + price;
  totalPrice.html(newTotalPrice);
}

function extractPrice(price) {
  var totalPrice = $("#total-price > span");
  var newTotalPrice = Number(totalPrice.html()) - price;
  totalPrice.html(newTotalPrice);
}

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains('pepperonni')").toggle();
  var price = Number($(".price-pepperoni > span").html());
  if ($(".btn-pepperonni").hasClass("active")) {
    addPrice(price);
  } else {
    extractPrice(price);
  }
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains('mushrooms')").toggle();
  var price = Number($(".price-mushrooms > span").html());
  if ($(".btn-mushrooms").hasClass("active")) {
    addPrice(price);
  } else {
    extractPrice(price);
  }
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains('green peppers')").toggle();
  var price = Number($(".price-green-peppers > span").html());
  if ($(".btn-green-peppers").hasClass("active")) {
    addPrice(price);
  } else {
    extractPrice(price);
  }
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains('white sauce')").toggle();
  var price = Number($(".price-sauce > span").html());
  if ($(".btn-sauce").hasClass("active")) {
    addPrice(price);
  } else {
    extractPrice(price);
  }
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains('gluten-free crust')").toggle();
  var price = Number($(".price-crust > span").html());
  if ($(".btn-crust").hasClass("active")) {
    addPrice(price);
  } else {
    extractPrice(price);
  }
});
