
a = parseInt(prompt('입력1'));
b = parseInt(prompt('입력2'));

c = a + b;

/* 
document.write(a);
document.write(b);
document.write(c); */

if (a > b) {
  alert(a + '와' + b + ' 중 큰 수는 ' + a + ' 이다.');
} else if (a < b) {
  alert(a + '와' + b + ' 중 큰 수는 ' + b + ' 이다.');
} else {
  alert(a + '와' + b + '는 같은 수이다.');
}

