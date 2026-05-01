import { dadosTempo } from './mapeamentoDom.js';
import { dadosPrev } from './mapeamentoDom.js';

export default function render(data) {
  const icon = data?.weather[0]?.icon;
  const urlIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  
  const html = `
  
  <img class="icon" src="${urlIcon}" alt="Imagem clima atual">
  <div class="caixa-um">
  <h1 class="cidade">${data?.name}</h1>
  <h2 class="temperatura">${Math.floor(data?.main?.temp)}ºC</h2>
  <p class="descricao">${data?.weather[0]?.description}</p>
  </div>
  
  <div class="divisoria"></div>
  
  <div class="caixa-dois">
  <img src="./src/img/humidity.png" alt="imagem de gota d'água">
  <p>Umidade</p>
  <h4 class="umidade">${data?.main?.humidity}%</h4>
  </div>
  <div class="caixa-tres">
  <img src="./src/img/wind.png" alt="imagem de vento">
  <p>Vento</p>
  <h4 class="vento">${(data?.wind?.speed * 3.6).toFixed(0)}Km/h</h4>
  </div>
  `;
  
  dadosTempo.innerHTML = html;
  dadosTempo.classList.add("active");
  
  dadosPrev.innerHTML = "<p>Atualizado agora há pouco</p>"
}