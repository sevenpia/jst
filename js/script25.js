var abc = document.querySelectorAll('.hc');
var ppp = document.querySelectorAll('.c1');



/* 웹요소에 접근하기 
querySelector  : 태그, 클래스, 아이디..  접근가능..  인덱스0번만 가져온다.
querySelectorAll : 태그, 클래스, 아이디..  접근가능..  인덱스전체를 가져온다. 
getElementById : 아이디에 접근
getElementsByClassName : 클래스에 접근
getElementsByTagName
*/

console.log(document.querySelector('#detail'))
console.log(document.querySelectorAll('#detail'))

console.log(document.querySelector('.uu'))
console.log(document.querySelector('p'))
console.log(document.querySelectorAll('p'))

console.log(document.getElementById('detail'))
console.log(document.getElementsByClassName('c1'))
console.log(document.getElementsByTagName('h2'))

/* console.log(abc);
console.log(typeof (abc));

console.log(ppp);
console.log(typeof (ppp)); */

/* abc[0].style.visibility = 'hidden'
abc[1].style.visibility = 'hidden'  
ppp[0].style.visibility = 'hidden'
ppp[1].style.visibility = 'hidden'   */

for (let i = 0; i < abc.length; i++) {
  abc[i].style.visibility = 'hidden'
  ppp[i].style.visibility = 'hidden'
}
