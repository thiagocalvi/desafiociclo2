import { addCesta } from "./addCesta.js";
const listaProdutos = document.querySelector('#produtos');
function caregaLista(Produtos){
    for(let pro of Produtos){
        const FilhoLi = document.createElement('li');
        FilhoLi.setAttribute('class', 'listaDeProdutos');
        for(let ListaP in pro){
            if(ListaP == 'preco'){
               let p = listaProdutos.appendChild(FilhoLi).setAttribute('date-preco', pro[ListaP]);     
            }else{
                listaProdutos.appendChild(FilhoLi).textContent = `${pro[ListaP]}`;
                addCesta(FilhoLi, pro[ListaP]);
            }
        }  
             
    }   
}
export{caregaLista};