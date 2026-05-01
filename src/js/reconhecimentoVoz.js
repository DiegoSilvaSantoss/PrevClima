import { campoCidade } from './mapeamentoDom.js';
import chamadaClima from './mainApiClima.js';

export default function dectarVoz() {
  let reconhecimentoVoz = new window.webkitSpeechRecognition();
  
  reconhecimentoVoz.lag = "pr-BR";
  reconhecimentoVoz.start();
  
  reconhecimentoVoz.onresult = function(evento) {
    let textoTranscrito = evento.results[0][0].transcript;
    
    campoCidade.value = textoTranscrito;
    
    chamadaClima()
  }
}