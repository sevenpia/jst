var bt = document.getElementById('btn');
console.log(bt);

window.addEventListener('scroll', function () {
  console.log(scrollY);
  if (scrollY > 50) {
    bt.style.display = "block";
  } else {
    bt.style.display = "none";
  }
})


// onclick="topFun()"
bt.addEventListener('click', function () {
  topFun();
})


function topFun() {
  document.documentElement.style.scrollBehavior = "smooth";
  document.documentElement.scrollTop = 0;
}

