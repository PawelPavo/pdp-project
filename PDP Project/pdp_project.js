// JavaScript Document

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function myFunction() {
  var element = document.getElementById("addToCart");
  element.classList.toggle("collapse");
}
 
 function changeAutoShipPrice (){
   var element = document.getElementById("autoship_price");
   element.classList.toggle("fs-4")
   
   var element = document.getElementById("original_price");
   element.classList.toggle("fs-4")
   
   var element = document.getElementById("original_price");
   element.classList.toggle("text-decoration-line-through")			
   }
 
 function chooseDeliveryDesktop() {
   var selectBox = document.getElementById("delivery_dropdown");
     var selectedValue = selectBox.value;
   
   if (selectedValue=="Deliver Once"){
       var element = document.getElementById("original_price");
       element.classList.toggle("text-decoration-line-through")
       var element = document.getElementById("autoship_price");
       element.classList.remove("fs-4")
       var element = document.getElementById("og_price_wrapper")
       element.classList.remove("opacity_custome")
       document.querySelector("#add_to_cart_DT").textContent = "Add to Cart";
       document.querySelector("#sub_to_autoship").textContent = "Pay less with AutoShip:";
       var element = document.getElementById("as_price_wrapper")
       element.classList.add("as_opacity_custome")
   } else {
     var element = document.getElementById("autoship_price");
     element.classList.add("fs-4")
     var element = document.getElementById("original_price");
     element.classList.add("text-decoration-line-through")
     document.querySelector("#add_to_cart_DT").textContent = "Subscribe to AutoShip";
     var element = document.getElementById("add_to_cart_DT")
     element.classList.add("fw-bold")
     var element = document.getElementById("og_price_wrapper")
     element.classList.add("opacity_custome")
     var element = document.getElementById("as_price_wrapper")
     element.classList.remove("as_opacity_custome")
     document.querySelector("#sub_to_autoship").textContent = "";
   }
 }

function chooseDeliveryMobile() {
  var selectBox = document.getElementById("drawer_autoship_select");
    var selectedValue = selectBox.value;
  
  if (selectedValue=="Deliver Once"){
    document.querySelector("#drawer_autoship").textContent = "One-Time Purchase";
    document.querySelector("#drawer_autoship_purchase_btn").textContent = "Add to Cart";
    document.querySelector("#drawer_autoship_count").textContent = "$0.80/count | 30 - 60 Day Supply";
    var element = document.getElementById("drawer_autoship_original_price");
    element.classList.remove("text-decoration-line-through");
    element.classList.add("fs-4");
    var element = document.getElementById("drawer_autoship_autoship_price");
    element.classList.add("text-decoration-line-through");
    element.classList.remove("fs-4");
  } else {
    document.querySelector("#drawer_autoship").textContent = "AutoShip & Save";
    document.querySelector("#drawer_autoship_purchase_btn").textContent = "Subscribe to AutoShip";
    document.querySelector("#drawer_autoship_count").textContent = "$0.75/count | 30 - 60 Day Supply";
    var element = document.getElementById("drawer_autoship_original_price");
    element.classList.add("text-decoration-line-through");
    element.classList.remove("fs-4");
    var element = document.getElementById("drawer_autoship_autoship_price");
    element.classList.remove("text-decoration-line-through");
    element.classList.add("fs-4");
  }
}

function hide_autoship_info_mbile(){
  var element = document.getElementById("autoship_mobile_info");
  element.classList.toggle("d-none");
  var element = document.getElementById("original_price_mobile");
  element.classList.toggle("text-decoration-line-through");
}




