var omaLaiva = [];
var vihollisenAlueLista = [];
var vihollisenLaivat = [];
var omatLaivatNumber = 0;
var aloitus = true;

function laivanupotus() {
    var kentanSolut;
    var x = "";

    for (let j = 0; j < 10; j++) {
        x += "<tr>"
        for (let k = 0; k < 10; k++) {
            kentanSolut = '<td> <button onclick="aktivoiNappi('+j+','+k+')"'
            kentanSolut +=  'id="'+j+'.'+k+'"> '+j+','+k+' </button> </td>'
            x = x + kentanSolut;
        }
        x += "</tr>"
    }

    document.getElementById("peliAlusta").innerHTML = x;
    vihollinen();
}

var vihollisenLaiva = [];

function vihollinen() {
    var vihollisenSolut;
    var y ="";

    for (let o = 0; o < 10; o++) {
        y += "<tr>"
        for (let u = 0; u < 10; u++) {
            vihollisenSolut = '<td> <button id="'+o+'.'+u+'"> '+o+','+u+' </button> </td>';
            y = y + vihollisenSolut; 
        }
        y += "</tr>"
    }
    document.getElementById("vihollisenAlusta").innerHTML = y;

    var yhdistaKordinaatit;
    
    
    for(let i = 0; i < 3; i++) {
        var vihollisenKordinaatitX = Number(Math.floor(Math.random()*10));
        var vihollisenKordinaatitY = Number(Math.floor(Math.random()*10));
        yhdistaKordinaatit = vihollisenKordinaatitX + "." +vihollisenKordinaatitY;
        vihollisenLaiva.push(yhdistaKordinaatit);
        console.log(vihollisenLaiva);
    }
}

    
function aktivoiNappi(j, k) {
    var kordinaatit = j + "." + k;
    if(omaLaiva.length <= 2 && aloitus == true) {
        if (omaLaiva.includes(kordinaatit)) {
            alert("Et voi valita samaa ruutua!")
        }else{
            omaLaiva.push(kordinaatit);
            console.log(omaLaiva);

        }
    } else {
        aloitus = false;
        if (osuiko(kordinaatit) == true) {
            alert("Nyt osuit pahasti!");
        } else {
            console.log("Ei mahtanut osua!");
        }
        voitto();
        vihollisenVuoro();
    }
}


function osuiko(kordinaatit) {
    for (let c = 0; c < vihollisenLaiva.length; c++) {
        if(kordinaatit == vihollisenLaiva[c]) {
            vihollisenLaiva.splice([c], 1)
            console.log(vihollisenLaiva);
            return true
        }
    }
    return false
}


function vihollisenVuoro() {
    var vihollisenIskuX = Math.floor(Math.random() * 10);
    var vihollisenIskuY = Math.floor(Math.random() * 10);
    var vihollisenIskut = String(vihollisenIskuX) + "." + String(vihollisenIskuY);

    if (onkoValittu(vihollisenIskut) == true) {
        vihollisenVuoro();
    } else {
        vihollisenAlueLista.push(vihollisenIskut);
        if (osuikoVihollinen(vihollisenIskut) == true) {
            alert("Vihollinen osui!");
        } else {
            
        }
        voitto();
    }
}


function voitto() {
    if (vihollisenLaiva.length == 0) {
        alert("Voitit pelin, loler");
        location.reload();
    }
    else if (omaLaiva.length == 0) {
        alert("Vihollinen voitti, voi vitsi!");
        location.reload();
    }
}


function onkoValittu(vihollisenIskut) {
    for (let q = 0; q < vihollisenAlueLista.length; q++) {
        if(vihollisenIskut == vihollisenAlueLista[q]) {
            return true
        }
    }
    return false
}


function osuikoVihollinen(vihollisenIskut) {
    for (let w = 0; w < omaLaiva.length; w++) {
        if(vihollisenIskut == omaLaiva[w]) {
            omaLaiva.splice([w], 1)
            console.log(omaLaiva);
            return true
        }
    }
    return false
}