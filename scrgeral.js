// Função para esconder os botões tablinks quando a página for carregada
function hideTablinks() {
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].style.display = "none";
  }
}

// Função para mostrar ou esconder os botões tablinks quando o usuário clicar no menu hambúrguer
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

// Função para abrir uma aba quando o usuário clicar em um botão tablink
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Esconder todos os elementos com a classe "tabcontent"
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remover a classe "active" de todos os elementos com a classe "tablinks"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostrar o elemento com o id igual ao nome da aba e adicionar a classe "active" ao botão que abriu a aba
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  display: none; 

  // Fechar o menu hambúrguer e esconder os botões tablinks
  var hamburger = document.getElementsByClassName("hamburger")[0];
  hamburger.classList.remove("is-active");
}

// Função para exibir o texto com efeito de digitação
function showTypingText() {
  var texts = document.querySelectorAll(".typewriter");
  texts.forEach(function(element) {
    var text = element.innerText;
    element.innerText = "";
    var index = 0;

    // Função para simular a digitação
    function typeWriter() {
      if (index < text.length) {
        element.innerText += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidade de digitação (em milissegundos)
      }
    }

    typeWriter();
  });
}

// Chamar a função hideTablinks quando a página for carregada
window.onload = function () {
  hideTablinks();
  showTypingText(); // Chamar a função showTypingText para exibir o texto com efeito de digitação
  openTab(null, 'Home'); // Chamar a função openTab para exibir a aba "Inicio" quando a página carregar
};

// Adicionar um evento de clique ao menu hambúrguer para chamar a função toggleTablinks
var hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
  toggleTablinks();
});