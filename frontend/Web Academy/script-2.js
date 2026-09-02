/*const stock =0
if(0<stock && stock< 5){
    console.log("Stock faible")
} else if ( stock >=5 ){
    console.log ("Stock suffisant")
} else if(stock==0){
    console.log("Rupture")
}
console.log("4"===4)
const age = 20 
const inscrit = true 
if ( age >= 18 && inscrit ) { console.log(" Accès autorisé")}
//Le tarif du zémidjan
const distanceKM = 3
const heure = 3
console.log(`Vous avez parcouru ${distanceKM}Km aux environ de ${heure}h.`)
if(6<heure && heure<21 && distanceKM>10){
    console.log(`Ainsi vous devez payer${distanceKM*100} FCFA . Par contre étant donné
    que vous avez fait plus de 10Km vous avez un réduction de 200 CFCA . Ce qui donne finalement ${distanceKM*100-200}. Merci!!`)
}
else if(6<heure && heure<21 && distanceKM<=10){
    console.log(`Ainsi vous devez payer${distanceKM*100}FCFA .`)
}
else{
    console.log(`Vous avez circulé la nuit et la nuit nous doubblons nos tarifs .Ce qui vous fait ${distanceKM*200}FCFA`)
}
let i = 0
while(i<10){
    console.log(i)
    i+=1
}
let j=1
let r=0
while(j<101){
    r=r+j
    j++
}
console.log(r)
let t=1
let a=0
while(t<21){
    j=(t*(t+1))/(t+1)
    a+=j
    t++
}
console.log(a)
const n=7
for( let i=0 ; i< 11; i++){
    console.log(`${n}x${i}=${n*i}`)
}
for(let i=10;0<i;i--){
    console.log(`${n}x${i}=${n*i}`)
}
const fruits = ["orange","papaye","mangue","ananas","banane"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[fruits.length-1])
fruits[3]="goyave"
//ajouter à la fin du tableau
fruits.push("pastèque")
//ajouter au début du tableau
console.log(fruits)
fruits.unshift("coco")
console.log(fruits)
//supprimer le dernier élément
fruits.pop()
fruits.splice(0,2)
for(let fruit of fruits){
    console.log(fruit)
}
const prix=[12000,8500,15000,6000,11000,9500]
let total=0
for(const montant of prix){
    total+=montant
}

for(montant of prix ){
    if(montant>=a){
        a=montant
    }
}
console.log(a)
function salutation(){
    console.log("Bienvenue à l'atelier du jour")
}
salutation()
function nom_de_famille(){
    console.log("Porto")
    
}
nom_de_famille()
function bonjour(nom){
    console.log(`Bonjour ${nom} comment vas-tu`)
}bonjour("Lionel")
bonjour("Igor")
function prixTTC(prixHT, taux){
    return prixHT + prixHT * taux ;
}
const aPayer= prixTTC(100000, 0.18); //11800
console.log(" A payer : " + aPayer+"FCFA");
function prixTTC(prixHT, taux){
    console.log(`Voici le prix et toutes  taxes comprises \n ${prixHT*taux}`)
    return prixHT*taux
}
prixTTC(10000,0.18)

function remise(prix, poucentage){
    return (`Vous avez une remise de ${prix*poucentage/100}. \ Vous devez donc ${prix-prix*poucentage/100}`)
}
const re=remise(20000,15)
console.log(re)*/

/*function total_(tableau){
    let t=0
    for( i=0;i<tableau.length;i++){
        t+=tableau[i]
    }
    console.log(`La somme des éléments est ${t}`)
    return t
}
console.log(total_([12000,8500,15000,6000,11000,9500]))
function moyenne(tableau){
    return (`La moyenne est ${total_(tableau)/tableau.length}`)
}
console.log(moyenne([12000,8500,15000,6000,11000,9500]))
//console.log(t)
console.log(total_([1,2,3]))
console.log(moyenne([1,2,3]))

function maximum(tableau){
    t=tableau[0]
    for(const i of tableau){
        if(t<i){
            t=i
        }
    }
    return t
}
console.log(maximum([1,2,3]))
console.log(document.title)
console.log(document)
const h1_1= document.querySelector("h1")
const h1_2 = document.querySelector("h1")
const h2_1= document.querySelector("h2")
const h2_2 = document.querySelector("h2")
//const cellule = document.querySelectorAll("td")
const nbr_h1 = (document.querySelectorAll("h1").length)
console.log(h1_1,h1_2,h2_1,h2_2)
console.log(nbr_h1)
const titre = document.querySelector("title")
titre.textContent="New fashion"
h1_1.style.color="white"
h1_1.style.backgroundColor="green"

const body =document.querySelector('body')

const p = document.createElement('p')
p.textContent = 'Un paragraphe créé à partir du JS'
body.appendChild(p)
let article1 ={
    nom: "orange",
    prix:50,
    quantité:30
}
let article2={
    nom: "toubani",
    prix:100,
    quantité:15
}
let article3 ={
    nom: "maïs",
    prix:150,
    quantité:12
}
let article4 ={
    nom: "biscuits",
    prix:200,
    quantité:0
}
let article5 ={
    nom: "gâteau",
    prix:50,
    quantité:0,
}
inventaire=[
    {nom: "orange",prix:50,quantité:30},
    {nom: "toubani",prix:100,quantité:15},
    {nom: "maïs",prix:150,quantité:12},
    {nom: "biscuits",prix:200,quantité:0},
    {nom: "gâteau",prix:50,quantité:0},
]
for(article of inventaire){
    const produit =document.createElement('div')
    produit.classList.add('carte')
    produit.textContent=`${article.nom}: ${article.prix}fcfa: ${article.quantité}`
    if(article.quantité==0){
        produit.classList.add('rupture')
    }
    body.appendChild(produit)
}
const bouton = document.createElement('button')
bouton.textContent="Clique sur moi"
body.appendChild(bouton)
function changer_texte(){
    document.querySelector('button').textContent="Merci d'avoir cliqué"
}
bouton.addEventListener('click',changer_texte)
/*for(let i=1;i<4;i++){
    const bouton=document.createElement('button')
    body.appendChild(bouton)
}*/
/*const bouton1 = document.createElement('button')
const bouton2 = document.createElement('button')
const bouton3 = document.createElement('button')
body.appendChild(bouton1)
body.appendChild(bouton2)
body.appendChild(bouton3)
bouton1.style.width="50px"
bouton1.textContent="Changer le titre"
bouton2.textContent = 0
function change_titre(){
    document.querySelector('title').textContent = "Titre changé"
}
bouton1.addEventListener("click",change_titre)
let compt =1
function compteur(){
    compt+=1
    bouton2.textContent = compt
}
function add(){
    const n1 = document.querySelector("#nombre1").value
    const n2 = document.querySelector("#nombre2").value
    const nn1 = Number(n1)
    const nn2 = Number(n2)
    const resultat = nn1 + nn2
    const affichage = document.querySelector('p')

    affichage.textContent = resultat
}
const boutonn = document.querySelector("button")
boutonn.addEventListener('click',add)
boutonn.addEventListener('click',function(event){
    console.log(event)
})
const champ_1= document.querySelector('#nombre1')
const champ_2= document.querySelector('#nombre2')
champ_1.addEventListener('keypress',function(event){
    console.log(event)
    if (event.key === 'Enter'){
        champ_2.focus()
    }
})


document.addEventListener("click",function(event){
    const rond = document.createElement('div')
    rond.classList.add('ma-div')
    p.appendChild(rond)
    console.log(event)
})*/
const todo =document.querySelector('#todo')
const bouton=document.querySelector('button')
const p = document.querySelector('p')


bouton.addEventListener('click', function(event){
    const valeur = todo.value 
    if(todo.value === "") return
    const elt = document.createElement('p')
    elt.style.border=" 2px solid black"
    elt.style.padding="5px 10px "
    elt.style.margin="5px"
    elt.style.borderRadius="10px"
    elt.style.width="200px"
    elt.style.textWrap="balance"
    elt.style.textAlign="justify"
    elt.textContent=valeur
    p.appendChild(elt)
    todo.value=""
})
todo.addEventListener("keypress",function(event){
    const valeur = todo.value 
    const elt = document.createElement('p')
    if(event.key === 'Enter'){
        if(todo.value==="") return
    elt.textContent=valeur
    p.appendChild(elt)
    todo.value=""
    }
    
    
})



