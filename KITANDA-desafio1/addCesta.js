function addCesta(Filholi, proList){
    const cestaDoCliente = document.querySelector('#cestaDoCliente');
    let itensCesta = [];
    Filholi.addEventListener('click',()=>{
        if(itensCesta.indexOf(proList) == -1){
            itensCesta.push(proList);
            const Filholi = document.createElement('li');
            cestaDoCliente.appendChild(Filholi).textContent = proList;
        }else{
            alert(`O item ${proList} já está na cesta!`)
        }
    });
}
export{addCesta};
