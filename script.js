




var Swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });



let read_more_768 = document.getElementById("read_more_768");
let read_more_1120 = document.getElementById("read_more_1120");
const logos_768 = document.querySelectorAll(".hidden_logo_768");
const logos_1120 = document.querySelectorAll(".hidden_logo_1120");
const hidden_logo_768 = document.querySelector(".hidden_logo_768");
const hidden_logo_1120 = document.querySelector(".hidden_logo_1120"); 
const next_mnemonic_symbol_768 = document.querySelector(".next_mnemonic_symbol_768");
const next_mnemonic_symbol_1120 = document.querySelector(".next_mnemonic_symbol_1120");
const next_text_hidden = document.querySelector(".next_text_hidden"); 
const next_text_read_768 = document.querySelector(".next_text_read_768");   
const next_text_read_1120 = document.querySelector(".next_text_read_1120");  
const hideButtonText = "Скрыть"; 
const visibleButtonText = "Читать далее"; 
const hidden_text = document.querySelector(".hidden_text");   
let brand = document.querySelectorAll(".brand");
const hidden = document.querySelector(".hidden"); 
const next_mnemonic_symbol = document.querySelector(".next_mnemonic_symbol"); 
console.log(logos_768);
function myFunction() { };

if (window.screen.width < 1120 ) {
    for (let i = 0; i < logos_768.length; i++) { logos_768[i].classList.add("hidden"); }
    console.log("условие 1 " + window.screen.width);
}


else if (window.screen.width >= 1120) {
   
    for (let i = 0; i < logos_1120.length; i++) { logos_1120[i].classList.add("hidden"); }
  console.log("условие 2 " + window.screen.width);
}

function toggleVisibleLogos(one, two, three, four, five) { 

  for (let one of two) {
    one.classList.toggle("hidden");
  }
  three.classList.toggle("next_mnemonic_symbol");

  if (three.classList.contains("next_mnemonic_symbol")) { five.innerHTML = hideButtonText}
  else 
  { five.innerHTML = visibleButtonText  } 
 
}



read_more_768.addEventListener("click", function () { toggleVisibleLogos(hidden_logo_768, logos_768, next_mnemonic_symbol_768, read_more_768, next_text_read_768) });

read_more_1120.addEventListener("click", function () { toggleVisibleLogos(hidden_logo_1120, logos_1120, next_mnemonic_symbol_1120, read_more_1120, next_text_read_1120) });





/*
read_more_768.addEventListener("click", function () {

  for (let hidden_logo_768 of logos_768) {
    hidden_logo_768.classList.toggle("hidden");
  }
  next_mnemonic_symbol_768.classList.toggle("next_mnemonic_symbol");

  if (read_more_768.classList.contains("active")) { next_text_read_768.innerHTML = visibleButtonText }
  else 
  { next_text_read_768.innerHTML = hideButtonText } 
  
})

read_more_1120.addEventListener("click", function () {

  
  for (let hidden_logo_1120 of logos_1120) { 
    
      hidden_logo_1120.classList.toggle("hidden");}
  next_mnemonic_symbol_1120.classList.toggle("next_mnemonic_symbol")
  
  if (read_more_1120.classList.contains("active")) { next_text_read_1120.innerHTML = visibleButtonText }
  else 
  { next_text_read_1120.innerHTML = hideButtonText  } 
} )


*/