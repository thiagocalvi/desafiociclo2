window.onload = function(){

    let Produtos = [
        {nome:'Mamão Papaia', preco:'3.58'},
        {nome:'Laranja', preco:'3.58'},
        {nome:'Manga', preco:'4.89'},
        {nome:'Melão', preco:'3.58'},
        {nome:'Melancia', preco:'3.58'},
    ];


    const listaProdutos = document.querySelector('#produtos');
    const total = document.querySelector('#mostraTotalCompra');
    const cestaCli = document.querySelector('#cestaDoCliente'); 
    
    (()=>{
        for(let pro of Produtos){
            const FilhoLi = document.createElement('li');
            for(let ListaP in pro){
                if(ListaP == 'preco'){
                    listaProdutos.appendChild(FilhoLi).setAttribute('date-preco', pro[ListaP]);     
                }else{
                    listaProdutos.appendChild(FilhoLi).textContent = `${pro[ListaP]}`;
                    FilhoLi.addEventListener('click',()=>{
                        let itensCesta = [];
                        for(let cesta of itensCesta){
                            if(pro[ListaP] == itensCesta[cesta]){
                                alert(`${pro[ListaP]} já está na cesta!`)
                            }else{
                                itensCesta.push(`${pro[ListaP]}`);
                                const liCesta = document.createElement('li');
                                cestaCli.appendChild(liCesta).textContent = `${pro[ListaP]}`;
                            }
                        }






                        
                        console.log(itensCesta);
                    });
                }
            }        
        }    
    })(Produtos);

    //adicionar os items na cesta; verificar se não são duplicados, se for exebir um alert; somar os preços e mostrar no total
    
} 