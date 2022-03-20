function abreMenu() {
  document.getElementById('menu-lateral').style.width = '45%'
  document.getElementById('menu-lateral').style.heght = '100%'
  document.getElementById('botao-hamburg').style.visibility = 'hidden'
}

function fechaMenu() {
  document.getElementById('menu-lateral').style.width = '0%'
  document.getElementById('corpo-do-site').style.marginLeft = '0%'
  document.getElementById('botao-hamburg').style.visibility = 'visible'
}
