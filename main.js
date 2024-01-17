const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];




  // Selección de la lista de categorías por su id
const categoriesList = document.getElementById("categories");

// Contar el número de categorías (elementos li.item)
const categorias = categoriesList.getElementsByClassName("item");
console.log("Número de categorías:", categorias.length);

// Iterar sobre cada categoría y mostrar el título y el número de artículos
for (let i = 0; i < categorias.length; i++) {
  const categoria = categorias[i];
  const titulo = categoria.querySelector("h2").textContent;
  const numArticulos = categoria.querySelectorAll("ul li").length;
  console.log("Categoría:", titulo);
  console.log("Número de artículos:", numArticulos);
}






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