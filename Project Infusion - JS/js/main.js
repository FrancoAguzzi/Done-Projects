(function() {
  // BURGER MENU

  var $ulNavegacao = document.querySelector(".navegacao");
  var $whiteBtn = document.querySelector(".white-burger");

  $whiteBtn.addEventListener("click", abreFechaMenu);

  function abreFechaMenu() {
    $ulNavegacao.classList.toggle("opened");
  }

  // SLIDE IMAGENS

  var $leftImages = document.querySelector(".left-images");
  var $rightImages = document.querySelector(".right-images");
  var $sliderImage = document.querySelector(".slider-image");

  $leftImages.addEventListener("click", moveLeftImage);
  $rightImages.addEventListener("click", moveRightImage);

  function moveLeftImage() {
    if ($sliderImage.getAttribute("src") === "/images/slider/slide-02.png") {
      $sliderImage.removeAttribute("src");
      $sliderImage.setAttribute("src", "/images/slider/slide-01.png");
    }
  }

  function moveRightImage() {
    if ($sliderImage.getAttribute("src") === "/images/slider/slide-01.png") {
      $sliderImage.removeAttribute("src");
      $sliderImage.setAttribute("src", "/images/slider/slide-02.png");
    }
  }

  // SLIDE TEXTOS

  var $textos = {
    texto1:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    texto2:
      "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.",
    texto3: "O trecho padrão original de Lorem Ipsum, usado desde o século XVI."
  };

  var $blockquote = document.querySelector("blockquote");
  var $leftTexts = document.querySelector(".left-texts");
  var $rightTexts = document.querySelector(".right-texts");
  $blockquote.innerHTML += $textos.texto1;

  $leftTexts.addEventListener("click", moveLeftTexto);
  $rightTexts.addEventListener("click", moveRightTexto);

  function moveLeftTexto() {
    switch ($blockquote.textContent) {
      case $textos.texto3:
        $blockquote.textContent = "";
        $blockquote.innerHTML += $textos.texto2;
        break;
      case $textos.texto2:
        $blockquote.textContent = "";
        $blockquote.innerHTML += $textos.texto1;
        break;
      case $textos.texto1:
        break;
    }
  }

  function moveRightTexto() {
    switch ($blockquote.textContent) {
      case $textos.texto1:
        $blockquote.textContent = "";
        $blockquote.innerHTML += $textos.texto2;
        break;
      case $textos.texto2:
        $blockquote.textContent = "";
        $blockquote.innerHTML += $textos.texto3;
        break;
      case $textos.texto3:
        break;
    }
  }
})();
