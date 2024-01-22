import myName from './myName';
import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work (before adding lodash) 
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //using myName function
  element.textContent = myName('Panda');

  return element;
}

document.body.appendChild(component());
