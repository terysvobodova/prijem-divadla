let cenaListku = 12
let pocetNavstevniku = 174
let pocetPredstaveni = 15
let prijem = cenaListku * pocetNavstevniku * pocetPredstaveni

document.body.innerHTML += "<p>Zisk divadla: " + prijem + " Kč</p>"

let cenaStudent = 0.65 * cenaListku
let pocetStudentu = 0.4

let komplet = pocetNavstevniku * pocetPredstaveni
let vydelek = (komplet * 0.6 * cenaListku)  + (komplet * 0.4 * cenaStudent) 
document.body.innerHTML += "<p> Prijem se slevami: " + vydelek + " Kč</p>"

//reseni let prijemseStudenty = (cenaListku * (1 - pocetStudentu) + cenaStudent * pocetStudentu) * pocetNavstevniku * pocetPredstaveni
//document.body.innerHTML += "<p> Prijem se slevou pro studenty: " + prijemseStudenty + " Kč</p>"