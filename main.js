
console.log('Hello world')
const name='Wiola';
const age='27';
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

const mainHeader = document.querySelector('.mainHeader');
console.log(mainHeader);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

console.log(paragraphs[0]);

const about = document.querySelector('.about');
console.log(about.innerHTML);
about.innerHTML = 'Pozdro JS';
