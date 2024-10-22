const prompt = require("prompt-sync")()

var Nome = prompt("Nome do heroi: ")
var xp = prompt("xp dp heroi: ")
var elo;
if(xp<1000){
    elo = "Ferro";
}
else if(xp>=1001 && xp<=2000){
    elo = "Bronze";
}
else if(xp >= 2001 && xp <= 5000){
    elo = "Prata";
}
else if (xp >= 5001 && xp <= 7000){
    elo = "Ouro";
}
else if(xp >= 7001 && xp <= 8000){
    elo = "Platina";
}
else if (xp >= 8001 && xp <= 9000){
    elo = "Ascendente";
}
else if(xp >= 9001 && xp <= 10000){
    elo = "Imortal";
}
else if (xp > 10000){
    elo = "Radiante";
}

console.log("O heroi de nome "+Nome+" esta no novel de "+ elo);

