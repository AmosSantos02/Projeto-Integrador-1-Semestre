function ativarItem(elemento) {
  const itens = document.querySelectorAll('.nav_item')
  itens.forEach(item => item.classList.remove('active'))
  elemento.classList.add('active')
}