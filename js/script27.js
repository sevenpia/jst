var pic = document.querySelector('img')
var hh = document.querySelector('.red')

console.log(pic)
console.log('이미지는' + pic + '이다')


/* pic.onclick = changePic; 클릭하면 changePic함수가 실행된다.*/
/* pic.onmouseover = changePic; 마우스오버하면 changePic함수가 실행된다.
pic.onmouseout = originPic;    마우스 아웃하면 originPic 함수가 실행된다. */


// 클릭을 해라-- > 이미지가 바뀐다. changePic() 실행해라
// pic.addEventListener('click', changePic, false); 
// false : 버블링 =>  자식노드에서 부모노드로 이벤트가 전달된다. 생략가능 (기본값)
// true: 캡처링 => 부모노드에서 자식노드로 이벤트가 전달된다.

// 마우스오버되면 이미지가 바뀌고 (boy.png)
// 마우스가 나가면 이미지가 다시 돌아온다. (girl.png)

pic.addEventListener('mouseover', changePic)
pic.addEventListener('mouseout', originPic)

function changePic() {
  pic.src = 'images/boy.png'
  hh.style.color = '#f00'
}

function originPic() {
  pic.src = 'images/girl.png'
  hh.style.color = '#666'
}
