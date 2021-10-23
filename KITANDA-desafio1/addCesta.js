const cestaDoCliente = document.querySelector('#cestaDoCliente');
const mostraTotalCompra = document.querySelector('#mostraTotalCompra');
let itensNaCesta = [];
let total = 0;
let controle = 0;
function add(x){
  
    for(let e in x){
        if(e == 'nome'){
            if(itensNaCesta.indexOf(x[e]) == -1){
                itensNaCesta.push(x[e]);
                const liCesta = document.createElement('li');
                cestaDoCliente.appendChild(liCesta).textContent = x[e];
                controle = 1;
            }else{
                alert(`O item ${x[e]} já está na cesta`);
                controle = -1;
            }
            
        }
        if(e == 'preco' && controle == 1){
                total += Number(x[e]);
                mostraTotalCompra.value = total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
            }
        
    }
}
export{add};