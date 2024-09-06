export default function soma() {
  const wordInput = document.getElementById('resultado');
  let i = 12;
  let soma = 0;
  let k = 0;

  while (k < i) {
    k = k + 1;
    soma = soma + k;
  }
  document.getElementById('soma').innerText = soma;

}