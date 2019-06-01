(function(){
  var htmlEl = document.documentElement
  function setRemUint() {
    var rem = htmlEl.clientWidth / 10 // 750/10 = 75
    htmlEl.style.fontSize = `${rem}px` // font-szie: 75px 1rem = 75px
  }
  setRemUint()

  window.addEventListener('resize', setRemUint)
})()
