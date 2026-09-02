const annee=document.querySelector('#annee')
const bouton = document.querySelector('#bouton')

const nom = document.querySelector("#nom")
const prenom = document.querySelector("#prenom")
const ville = document.querySelector("#ville")

//const affichage = document.querySelector('#result')
function calcul(){
    age =annee.value  
    const new_annee = Number(age)
    const age_now = 2026 - new_annee
    result.textContent=`Vous avez ${age_now}`
    
}
let profils
let profils_json
bouton.addEventListener('click',()=>{
    calcul(); data()
})
function data(){
    try {
    profils = {"Nom":nom.value,"Prenom":prenom.value,"Ville":ville.value}
    console.log(profils)
    profils_json=JSON.stringify(profils)
    console.log(profils_json)       
    } catch (e) {
        console.log("Il y a erreur",e )
        console.log("il y a erreur")
        
    }

}

