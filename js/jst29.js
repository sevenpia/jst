console.log(document.getElementById('heading'));
// console.log(document.getElementById('heading'));

var heading = document.getElementById('heading')

/* heading.onclick = function () {
  this.style.color = "#f00"
  this.style.fontSize = "4em"
} */


heading.addEventListener('click', function () {
  this.style.color = "rgba(255,10,100,0.6)"
  this.style.fontSize = "4em"
})

heading.addEventListener('mouseleave', function () {
  this.style.color = "rgba(0,0,0,0.6)"
  this.style.fontSize = "2em"
})
