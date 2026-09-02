console.log("Hello world!")
let prix=500;
prix =450
console.log(prix)
const ville = "Natitingou";
let age = 14;
console.log(ville ,age)
console.log(age)
age = 15;
console.log(age);
const nom = "Chaussette"
let disponible = true
console.log(typeof nom )
console.log(typeof prix)
console.log(typeof disponible)
console.log(`Chaussette ~~  ${prix} FCFA  ~~ disponibilité  ${disponible}`)
//Le tarif du zémidjan
const distanceKM = 11
const heure = 3
console.log(`Vous avez parcouru ${distanceKM} Km aux environ de ${heure}.`)
if(6<heure && heure<21 && distanceKM>10){
    console.log(`Ainsi vous devez payer${distanceKM*100} FCFA . Par contre étant donné
    que vous avez fait plus de 10Km vous avez un réduction de 200 CFCA . Ce qui donne finalement ${distanceKM*100-200}. Merci!!`)
}
else if(6<heure && heure<21 && distanceKM<=10){
    console.log(`Ainsi vous devez payer${distanceKM*100} FCFA .`)
}
else{
    console.log(`Vous avez circulé la nuit et la nuit nous doubblons nos tarifs .Ce qui vous fait ${distanceKM*200} FCFA`)
}

