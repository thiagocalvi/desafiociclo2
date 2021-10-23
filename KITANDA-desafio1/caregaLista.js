import { add } from "./addCesta.js";
const listaProdutos = document.querySelector('#produtos');
function caregaLista(Produtos){
    for(let pro of Produtos){
        const liProdutos = document.createElement('li');
        liProdutos.addEventListener('click', ()=>{
           add(pro);
        });  
        liProdutos.setAttribute('class', 'listaDeProdutos');
        for(let ListaP in pro){
            if(ListaP != 'preco'){
                listaProdutos.appendChild(liProdutos).textContent = pro[ListaP];
            }else{ 
                listaProdutos.appendChild(liProdutos).setAttribute('date-preco', pro[ListaP]);     
            }
        }          
    }
}
export{caregaLista};
