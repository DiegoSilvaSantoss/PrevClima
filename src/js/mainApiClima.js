import { campoCidade, campoVazio, dadosTempo, dadosPrev, somErro } from './mapeamentoDom.js';
import render from './renderDadosTemp.js';
import mostrarErro from './erroMensagem.js';
import mostrarOk from './okMensagem.js';
import mostrarErroNet from './erroNet.js';
import createSkeleton from './renderSkeleton.js';


const chaveApi = '552c00ab853e988eb97637ded0156031';

let timeCampoVazioId;
let debounceTimeout;
const cache = new Map();

function tratarErroHTTP(status) {
  if (status === 404) {
    mostrarErro("Cidade não encontrada :(", "./src/img/interface-design.png");
  } else if (status >= 500) {
    mostrarErro("Erro no servidor, tente mais tarde :(");
  } else {
    mostrarErro("Erro inesperado :(");
  }
}

function feedbackCampoVazio() {
  campoVazio.innerHTML = 'Digite sua cidade ;)';
  campoVazio.classList.add('active');
  campoCidade.focus();

  clearTimeout(timeCampoVazioId);

  somErro.currentTime = 0;
  somErro.play();

  navigator.vibrate?.(80);

  timeCampoVazioId = setTimeout(() => {
    campoVazio.classList.remove('active');
  }, 1200);
}

async function buscarClima(cidade) {
  const cidadeKey = cidade.toLowerCase();

  
  if (cache.has(cidadeKey)) {
    return cache.get(cidadeKey);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${chaveApi}&units=metric&lang=pt_br`;

  const res = await fetch(url);

  if (!res.ok) {
    tratarErroHTTP(res.status);
    return null;
  }

  const data = await res.json();

  
  if (!data || !data.name || !data.main) {
    mostrarErro("Dados inválidos da API :(");
    return null;
  }

  cache.set(cidadeKey, data);

  return data;
}

export default function chamadaClima() {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(async () => {
    const cidade = campoCidade.value.trim();

    if (!cidade) {
      feedbackCampoVazio();
      return;
    }

    dadosTempo.classList.add("active");
    dadosTempo.innerHTML = createSkeleton();
    dadosPrev.innerHTML = "";

    try {
      const resJson = await buscarClima(cidade);

      if (!resJson) return;

      setTimeout(() => {
        render(resJson);
        mostrarOk(`✅ ${resJson.name}`);
      }, 800);

    } catch (erro) {
      mostrarErroNet("Erro de conexão :(", "./src/img/signal.png");
    }

  }, 400)
}