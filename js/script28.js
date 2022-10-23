var pic = document.querySelector('.pic')
var hh = document.querySelector('h2')
console.log(pic)

pic.addEventListener('mouseover', changPic)
pic.addEventListener('mouseout', originPic)

function changPic() {
  pic.src = 'images/boy.png'
  hh.style.color = "#f00"
}

function originPic() {
  pic.src = 'images/girl.png'
  hh.style.color = "#666"
}
