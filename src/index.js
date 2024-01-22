import myName from './myName';
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work (before adding lodash) 
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  //Add the image to our existing div. 
   const myIcon = new Image();
   myIcon.src = Icon; 

   element.appendChild(myIcon);

  //using myName function
  element.textContent = myName('Panda');

  return element;
}

document.body.appendChild(component());
