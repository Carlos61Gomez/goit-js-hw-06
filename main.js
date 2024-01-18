
// Obtener el elemento ul#categories
const categoriesList = document.querySelector('#categories');

// Obtener todos los elementos li.item dentro de ul#categories
const items = categoriesList.querySelectorAll('li.item');

// Contar y mostrar el número de categorías
console.log(`Número de categorías: ${items.length}`);

// Recorrer cada elemento li.item
items.forEach((item) => {
  // Obtener el título del artículo (tag <h2>)
  const title = item.querySelector('h2').textContent;

  // Obtener el número de artículos en la categoría (todos los elementos <li> anidados)
  const articleCount = item.querySelectorAll('li').length;

  // Mostrar el título del artículo y el número de artículos en la categoría
  console.log(`Título del artículo: ${title}`);
  console.log(`Número de artículos en la categoría: ${articleCount}`);
});


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Obtener el elemento ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Recorrer el array de ingredientes y generar los elementos de la lista
ingredients.forEach((ingredient) => {
  // Crear un elemento li
  const listItem = document.createElement('li');
  
  // Establecer el texto del elemento li
  listItem.textContent = ingredient;
  
  // Agregar el elemento li a la lista ul
  ingredientsList.appendChild(listItem);
});



const images = [
  { src: 'imagen1.jpg', alt: 'Imagen 1' },
  { src: 'imagen2.jpg', alt: 'Imagen 2' },
  { src: 'imagen3.jpg', alt: 'Imagen 3' },
  { src: 'imagen4.jpg', alt: 'Imagen 4' },
];

const gallery = document.querySelector('.gallery');
let galleryMarkup = '';

images.forEach(image => {
  galleryMarkup += `
    <li>
      <img src="${image.src}" alt="${image.alt}">
    </li>
  `;
});

gallery.insertAdjacentHTML('beforeend', galleryMarkup);






// Variable para almacenar el valor del contador
let counterValue = 0;

// Elementos del DOM
const counterValueElement = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

// Función para aumentar el contador
function increaseCounter() {
  counterValue++;
  counterValueElement.textContent = counterValue;
}

// Función para disminuir el contador
function decreaseCounter() {
  counterValue--;
  counterValueElement.textContent = counterValue;
}

// Escuchadores de eventos para los botones
increaseBtn.addEventListener('click', increaseCounter);
decreaseBtn.addEventListener('click', decreaseCounter);




const nombreInput = document.getElementById('nombre-input');
const nameOutput = document.getElementById('name-output');

nombreInput.addEventListener('input', function() {
  if (nombreInput.value === '') {
    nameOutput.textContent = 'Anónimo';
  } else {
    nameOutput.textContent = nombreInput.value;
  }
});




const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const inputValue = validationInput.value;
  const requiredSymbols = parseInt(validationInput.dataset.length);

  if (inputValue.length === requiredSymbols) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});



const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});




const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const formElements = loginForm.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      if (element.value.trim() === '') {
        alert('Todos los campos deben ser completados');
        return;
      }
      formData[element.name] = element.value;
    }
  }

  console.log(formData);
  loginForm.reset();
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}); 




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxesContainer.appendChild(box);
    
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

createButton.addEventListener('click', function() {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);