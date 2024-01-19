function toggleMode() {
    // 1º instrução: pegar html
    const html = document.documentElement // document é a representação do documento em formato de objeto JS. Através do ponto "." acessamos a tag html através do documentElement.
  
    // 2º instrução: troca de classes
    html.classList.toggle("light") // método JS já pronto que simplifica a condicional comentada abaixo.
  
    /* if(html.classList.contains('light')) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    } */
  
    // 3º instrução: pegar tag img
    const img = document.querySelector("#profile img") // msm do CSS
    const footerImg = document.querySelector("footer img")
  
    // 4º instrução: substituir img
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png") // se light, add image light
      img.setAttribute("alt", "Foto perfil Brenno Eudes cabelo preso sorrindo.")
      footerImg.setAttribute("src", "./assets/christ-redeemer-icon-light-mode.png");
    } else {
      img.setAttribute("src", "./assets/avatar-dark.png"); // sem light, add image dark
      img.setAttribute("alt", "Foto perfil Brenno Eudes cabelo solto sorrindo.");
      footerImg.setAttribute("src", "./assets/christ-redeemer-icon-dark-mode.png");
    }
  }