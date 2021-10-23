function resultadoCep(dadosCep){
    for(let campo in dadosCep){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value = dadosCep[campo];
        }
    }
}
let dadosCep = async function(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    try{
        let dadosFetch = await fetch(url);
        let dadosJson = await dadosFetch.json();
        resultadoCep(dadosJson);
    }catch(error){
        alert(error);
    } 
 }
 export{dadosCep};