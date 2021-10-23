import {caregaLista} from './caregaLista.js';
window.onload = function(){

    let Produtos = [
        {nome:'Mamão Papaia', preco:'6.45'},
        {nome:'Laranja', preco:'3.58'},
        {nome:'Manga', preco:'4.89'},
        {nome:'Melão', preco:'7.21'},
        {nome:'Melancia', preco:'10.80'}, 
    ];


    caregaLista(Produtos);
} 