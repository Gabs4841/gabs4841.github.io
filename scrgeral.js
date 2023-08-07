function hideTablinks() {
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].style.display = "none";
  }
}
function toggleTablinks() {
  var tablinks = document.getElementsByClassName("tablinks");
  var show = false;
  for (var i = 0; i < tablinks.length; i++) {
    if (tablinks[i].style.display == "none") {
      show = true;
      break;
    }
  }
  for (var i = 0; i < tablinks.length; i++) {
    if (show) {
      tablinks[i].style.display = "block";
    } else {
      tablinks[i].style.display = "none";
    }
  }
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  display: none; 
  var hamburger = document.getElementsByClassName("hamburger")[0];
  hamburger.classList.remove("is-active");
}
function showTypingText() {
  var texts = document.querySelectorAll(".typewriter");
  texts.forEach(function(element) {
    var text = element.innerText;
    element.innerText = "";
    var index = 0;
    function typeWriter() {
      if (index < text.length) {
        element.innerText += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  });
}
window.onload = function () {
  hideTablinks();
  showTypingText();
  openTab(null, 'Home');
};
var hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
  toggleTablinks();
});
