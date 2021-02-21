// IIFE Immedial Invoked Function Expression
// anonymous selft-executing function
(function(){
  function start(){
    console.log("App Started...");
    let firstHeading = document.getElementById('firstHeading');
    firstHeading.textContent = "Goodbye Cruel World!";
     // document.getElementById('firstHeading').textContent = "Goodbye world!";
     firstHeading.style.fontWeight = "bold";
     let main = document.getElementsByTagName("main")[0];
    //  console.log(main);
     // configure new element
     let newH2 = document.createElement("h2");
     newH2.setAttribute("class", "display-5");
     newH2.textContent = "Seconday Heading";

     main.appendChild(newH2);
  }
  window.addEventListener("load", start);
  // window.addEventListener('scroll',start);
})();
