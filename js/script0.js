// 글을 클릭하면 alert 창을 띄운다.
var ready = document.querySelectorAll(".ready")
console.log(ready)

/* ready[0].addEventListener("click", function (ev) {
  ev.preventDefault();
  alert("준비중입니다. ");
})

ready[1].addEventListener("click", function (ev) {
  ev.preventDefault();
  alert("준비중입니다. ");
})
 */

for (let i = 0; i < ready.length; i++) {
  ready[i].addEventListener("click", function (ev) {
    ev.preventDefault();
    alert("준비중입니다. ");
  })
}





