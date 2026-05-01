import { okCidade } from './mapeamentoDom.js';
import { somOk } from './mapeamentoDom.js';

let timeOkCidadeId;

export default function mostrarOk(okCidadeMsg) {
  okCidade.innerHTML = okCidadeMsg;
  okCidade.classList.add("active");
  
  somOk.currentTime = 0;
  somOk.play();
  
  navigator.vibrate(50);
  
  clearTimeout(timeOkCidadeId);
  
  timeOkCidadeId = setTimeout(() => {
    okCidade.classList.remove("active");
  }, 1000)
}