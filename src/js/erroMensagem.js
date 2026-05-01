import { erroMsg } from './mapeamentoDom.js';
import { dadosTempo } from './mapeamentoDom.js';
import { somErro } from './mapeamentoDom.js';
import { dadosPrev } from './mapeamentoDom.js';

let timeErroMsgId;

export default function mostrarErro(msg, img = "") {
  erroMsg.innerHTML = msg;
  erroMsg.classList.add("active");
  
  dadosTempo.innerHTML = msg ? `<img class="erro-img" src="${img}">` : "";
  dadosTempo.classList.add("active");
  
  dadosPrev.innerHTML = '<p>Erro ao encontrar cidade</p>'
  
  somErro.currentTime = 0;
  somErro.play();
  
  navigator.vibrate(90);
  
  clearTimeout(timeErroMsgId);
  
  timeErroMsgId = setTimeout(() => {
    erroMsg.classList.remove("active")
  }, 1600)
}