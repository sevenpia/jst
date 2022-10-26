var qsall = document.querySelectorAll(".ready");

/* qsall[0].addEventListener('click', function (ev) {
  ev.preventDefault();
  alert('준비중입니다.')
})

qsall[1].addEventListener('click', function (ev) {
  ev.preventDefault();
  alert('준비중입니다.')
}) */

for (let i = 0; i < qsall.length; i++) {
  qsall[i].addEventListener('click', function (ev) {
    ev.preventDefault();
    alert('준비중입니다.')
  })
}