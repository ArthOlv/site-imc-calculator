const formulario = document.getElementById("formulario");
const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
const aviso = document.getElementById("aviso");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    let peso = parseFloat(campoPeso.value);
    let altura = parseFloat(campoAltura.value);

    aviso.classList.remove("abaixo");
    aviso.classList.remove("normal");
    aviso.classList.remove("sobrepeso");
    aviso.classList.remove("obesidade");

    let IMC = Math.round((peso/(altura*altura)*1000))/1000;

    if(IMC < 18.5){
        aviso.classList.add("abaixo");
        aviso.innerHTML = `Seu IMC é de ${IMC}, você está abaixo do peso, princesa`;
    } else if(IMC < 24.9){
        aviso.classList.add("normal");
        aviso.innerHTML = `Seu IMC é de ${IMC}, você está normal, minha linda`;
    } else if(IMC < 29.9){
        aviso.classList.add("sobrepeso");
        aviso.innerHTML = `Seu IMC é de ${IMC}, você está com sobrepeso, gostosa`;
    } else{
        aviso.classList.add("obesidade");
        aviso.innerHTML = `Seu IMC é de ${IMC}, você está com obesidade, vamo tomar cuidado com essa saúde ai bb?`;
    }
});