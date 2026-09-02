const catalogue = document.querySelector('#catalogue')
let produits =[
    {nom:'Sac de riz',prix:25500},
    {nom: "Bidon d'huile 1L",prix:12500},
    {nom:'Boîte de tomate',prix:1000},
    {nom:'Paquet de spaghetti',prix:2500},
    {nom:'Savon',prix:300}
]
let panier=[]
function afficherCatalogue(){
    const zone = document.querySelector('#catalogue')
    for(let i =0;i < produits.length;i++){
        const div = document.createElement('div')
        const nom = document.createElement('h3')
        nom.textContent=produits[i].nom
        const prix = document.createElement('p')
        prix.textContent=produits[i].prix + " FCFA"
        const bouton = document.createElement('button')
        bouton.textContent='Ajouter'
        bouton.addEventListener('click',function(){
            panier.push({
                nom:produits[i].nom,
                prix:produits[i].prix
            })
        })
        div.appendChild(nom)
        div.appendChild(prix)
        div.appendChild(bouton)
        zone.appendChild(div)
        
    }
}
afficherCatalogue()
console.log(panier)