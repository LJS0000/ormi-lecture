// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// css 선택자로 단일 요소에 접근하기
document.querySelector('selector');

const myBtn = document.querySelector('#one');

const btnRed = document.querySelector('button');
const title = document.querySelector('#one');

btnRed.addEventListener('click', () => {
  title.classList.toggle('red');
});

const sectionTitle = document.createElement('h2');
sectionTitle.innerText = 'hello';

const body = document.querySelector('body');
const myUl = document.createElement('ul');

for (let i = 0; i < 5; i++) {
  const myLi = document.createElement('li');
  myLi.innerText = 'hello';
  myUl.innerText;
}

const btn = document.createElement('button');
btn.innerText = '눌럿!';
const body = document.querySelector('body');
body.append(btn);

btn.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.currentTarget);
});
