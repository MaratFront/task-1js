// CSS спосіб
const cssHideBtn = document.getElementById('css-hide-btn');
const blackSquare = document.getElementById('black-square');
cssHideBtn.addEventListener('click', () => {
  if(blackSquare.style.display == 'block'){
    blackSquare.style.display="none";
  }else{
    blackSquare.style.display="block";
  }
});

// JS спосіб
const jsRemoveBtn = document.getElementById('js-remove-btn');
jsRemoveBtn.addEventListener('click', () => {
  if(blackSquare.hidden){
    blackSquare.hidden=false;
  }else{
    blackSquare.hidden=true;
  }
});

// CSS+JS спосіб
const cssJsHideBtn = document.getElementById('css-js-hide-btn');
cssJsHideBtn.addEventListener('click', () => {
  blackSquare.classList.add('hidden');
});

// css+js-2спосіб
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
  blackSquare.classList.toggle('hidden');
});
const squares=document.getElementsByClassName('square-2');
const squaresBtn=document.getElementById('squares-btn');
squaresBtn.addEventListener('click', function(){
  for(let i=0; i<squares.length; i++){
    if(squares[i].style.display=="block"){
      squares[i].style.display="none";
  } else{
      squares[i].style.display="block";
  }
}
});
const hideButton = document.querySelector('#hide-button');
const selectorInput = document.querySelector('#selector-input');
let elementsToHide;

hideButton.addEventListener('click', () => {
  const selector = selectorInput.value;
  elementsToHide = document.querySelectorAll(selector);

  for(let i=0; i<elementsToHide.length;i++){
    elementsToHide[i].style.display="none";
  }
});
const YellowSquare=document.getElementById('Yellow-square');
let clickCount = 0;
let alertBox;

YellowSquare.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 1) {
    alertBox = alert("Привіт");
  } else if (clickCount === 2) {
    if (alertBox) {
      alertBox.close();
    }
    clickCount = 0;
  }
});
const element = document.getElementById("Red-square");
const elementBtn=document.getElementById("Red-btn");
elementBtn.addEventListener("mouseenter", function(){
  if(element.style.display="block"){  
    element.style.display="none";
  }   
});
elementBtn.addEventListener("mouseout", function(){
  element.style.display="block";
})
const greenSquare=document.getElementById('green-square');

selectorInput.addEventListener('click', ()=>{
  if(greenSquare.style.display="none"){
    greenSquare.style.display="block";
  }
})
selectorInput.addEventListener("input", ()=>{
  greenSquare.style.display="none";
})
function showImages() {
  const input = document.getElementById("input").value.split("\n");
  const output = document.getElementById("output");
  output.innerHTML = "";
  
  input.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width="300px";
    img.style.height="300px";
    img.onerror = () => {
      output.removeChild(img);
      alert(`Не вдалося завантажити зображення ${url}`);
    };
    output.appendChild(img);
  });
}
let coordinatesBlock = document.getElementById("coordinates");

// Додати прослуховувач подій для миші на весь документ
document.addEventListener("mousemove", function(event) {
  // Отримати координати миші
  let x = event.clientX;
  let y = event.clientY;

  // Оновити текст у блоку "coordinates"
  coordinatesBlock.innerHTML = "Х: " + x + ", У: " + y;
});
const userLang = navigator.language || navigator.userLanguage;
document.getElementById('lang').textContent = userLang;

// Отримання доступу до геолокації користувача
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

// Функція для відображення широти та довготи користувача
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = document.createElement("div");
  coords.style.position = "fixed";
  coords.style.top = "30px";
  coords.style.right = "0";
  coords.style.backgroundColor = "white";
  coords.style.padding = "10px";
  coords.innerText = `Ш: ${latitude}, Д: ${longitude}`;
  document.body.appendChild(coords);
  
  // Оновлення координат кожні 30 хвилин
  setInterval(() => {
    navigator.geolocation.getCurrentPosition(position => {
      coords.innerText = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`;
    });
  }, 1800000); // 30 хвилин у мілісекундах
}
let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');

// Завантаження тексту в блоки
window.onload = function() {
  // localStorage
  if(localStorage.getItem('block1')) {
    block1.innerHTML = localStorage.getItem('block1');
  }
  // cookie
  if(getCookie('block2')) {
    block2.innerHTML = getCookie('block2');
  }
  // sessionStorage
  if(sessionStorage.getItem('block3')) {
    block3.innerHTML = sessionStorage.getItem('block3');
  }
};

// Зберігання тексту при зміні
block1.addEventListener('input', function() {
  localStorage.setItem('block1', block1.innerHTML);
});

block2.addEventListener('input', function() {
  setCookie('block2', block2.innerHTML, 365);
});

block3.addEventListener('input', function() {
  sessionStorage.setItem('block3', block3.innerHTML);
});

// Функція для встановлення cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функція для отримання cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  // Визначаємо позицію прокручування сторінки
  let scrollTop = window.pageYOffset;

  if (scrollTop > 300) {
    // Відображаємо кнопку при прокрутці вниз
    scrollToTopBtn.style.display = "block";
  } else {
    // Ховаємо кнопку при прокрутці вгору
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  // Анімоване прокручування до початку сторінки
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Отримати посилання на блоки
const outerBlock = document.getElementById('outer');
const innerBlock = document.getElementById('inner');

// Обробники подій click
let innerBlockClickHandler = function(event) {
  alert('Виклик алерту з внутрішнього блоку');
  // Відключити обробник подій click на innerBlock
  innerBlock.removeEventListener('click', innerBlockClickHandler);
};

let outerBlockClickHandler = function(event) {
  alert('Виклик алерту з зовнішнього блоку');
  // Додати обробник подій click на innerBlock
  innerBlock.addEventListener('click', innerBlockClickHandler);
  // Відключити обробник подій click на outerBlock
  outerBlock.removeEventListener('click', outerBlockClickHandler);
};

// Додати обробники подій click на блоки
outerBlock.addEventListener('click', outerBlockClickHandler);
innerBlock.addEventListener('click', function(event) {
  event.stopPropagation(); // Зупинити подальше поширення події
  alert('Виклик алерту з внутрішнього блоку');
});
const openButton = document.getElementById('open-overlay');
 const overlay = document.getElementById('overlay');
      
openButton.addEventListener('click', function() {
overlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Вимкнути прокрутку сторінки
});
      
overlay.addEventListener('click', function() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Увімкнути прокрутку сторінки
});
const fileUpload = document.getElementById("file-upload");
const dropZone = document.getElementById("drop-zone");

// Оголосити функції для обробки подій перетягування файлів
function handleDragEnter(event) {
  event.preventDefault();
  dropZone.classList.add("dragover");
}

function handleDragLeave(event) {
  event.preventDefault();
  dropZone.classList.remove("dragover");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  dropZone.classList.remove("dragover");
  const files = event.dataTransfer.files;
  fileUpload.files = files;
}

// Додати обробник подій перетягування файлів до зони скидання
dropZone.addEventListener("dragenter", handleDragEnter, false);
dropZone.addEventListener("dragleave", handleDragLeave, false);
dropZone.addEventListener("dragover", handleDragOver, false);
dropZone.addEventListener("drop", handleDrop, false);
