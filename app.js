import { botaoBusca } from './src/js/mapeamentoDom.js';
import mainApiClima from './src/js/mainApiClima.js';
import { clearCampo } from './src/js/mapeamentoDom.js';
import clear from './src/js/clearCampoCidade.js';
import { btnVoz } from './src/js/mapeamentoDom.js';
import dectarVoz from './src/js/reconhecimentoVoz.js';


botaoBusca.addEventListener('click', mainApiClima);
clearCampo.addEventListener('click', clear);
btnVoz.addEventListener('click', dectarVoz);