/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100

var solution = Math.floor(Math.random() * 100) + 1;

var nombreEssai = 0;

while(nombreEssai < 6 && nombreSaisie != solution){
	
    var nombreSaisie = Number(prompt("Entrez un nombre en 1 et 100 : "));

	if (nombreSaisie > solution){
	
		console.log(nombreSaisie + " est trop grand");
    
	}else if(nombreSaisie < solution){
	
    		console.log(nombreSaisie + " est trop petit");
	}

	nombreEssai++;
		
}
if(nombreSaisie === solution){
	
	console.log("Bravo ! La solution était " + solution);

	console.log("Vous avez trouvé en " + nombreEssai + " essai(s)");

}else{

	console.log("Perdu... La solution était " + solution);		

}	



