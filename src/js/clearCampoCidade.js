import { campoCidade } from './mapeamentoDom.js';

export default function clear() {
  campoCidade.value = "";
  campoCidade.focus();
}