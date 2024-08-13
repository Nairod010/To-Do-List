import './styles.css';
import image from './assets/guts.jpg';

console.log('Webpack template is working!');

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

