let chave = "d545181201ad026dd05a8e6877833acc";
const clique = () =>{    
    let cidade = document.querySelector(".input-cidade").value

    if(!cidade){
        alert("inserir nome da cidade")
    }else{
         buscarCidade(cidade);

    }

   
    
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function buscarCidade(cidade) {
    
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade+
        "&appid="+
        chave+
       "&lang=pt_br"+
       "&units=metric")
        .then(res => res.json())


        console.log(dados);
        
        colocaNaTela(dados);


}

function colocaNaTela(dados){
    
    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = Math.round(dados.main.temp) + "ºC";
    document.querySelector(".descricao").innerHTML =  (dados.weather[0].description);
    document.querySelector(".Umidade").innerHTML = "umidade:" + dados.main.humidity + "%";
    document.querySelector(".img").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}