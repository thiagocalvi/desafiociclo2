import {dadosCep} from './buscaCep.js'
window.onload = function(){
    
    const btnBuscar = document.querySelector('#buscar');
    const CEP_ = document.querySelector('#cep');
    btnBuscar.addEventListener('click', ()=>{
        dadosCep(CEP_.value);
     })


}