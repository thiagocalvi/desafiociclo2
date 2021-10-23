import {caregaLista} from './caregaLista.js';
window.onload = function(){

    let Produtos = [
        {nome:'Mamão Papaia', preco:'3.58'},
        {nome:'Laranja', preco:'3.58'},
        {nome:'Manga', preco:'4.89'},
        {nome:'Melão', preco:'3.58'},
        {nome:'Melancia', preco:'3.58'},
    ];


    caregaLista(Produtos);
} 