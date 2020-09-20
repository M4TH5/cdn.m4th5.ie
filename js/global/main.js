window.ondragstart = function() { return false; };

window.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var contextElement = document.getElementById("m4th5_cm");
    contextElement.style.top = event.clientY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
  });
  window.addEventListener("click",function(){
    document.getElementById("m4th5_cm").classList.remove("active");
  });
  