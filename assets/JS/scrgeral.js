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
