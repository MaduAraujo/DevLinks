function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem light mode
    img.setAttribute("src", "./assets/avatar.png")
  }
}