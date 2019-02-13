
var weaponArray = new Array();

var ammunitionArray = new Array();

var clubArray = new Array();




function addItemCarriage(){
	

	
	var weaponEl = document.getElementById("weap");
		weaponArray.push[1];
	var ammunitionEl = document.getElementById("ammo");
		ammunitionArray.push[1];
	var clubEl = document.getElementById("clu");
		clubArray.push[1];
	
	}
addItemCarriage();

function tabulateFinalCost(){
	
	if(weaponArray.length === 0){
		console.log("No weapons...interesting choice.");
	}else{
		console.log("$"+weaponArray.length*200);
	}
	if(ammunitionArray.length === 0){
		console.log("No ammunition...interesting choice.");	
	}else{
		console.log("$"+ammunitionArray.length*200);
	}
	if(clubArray.length === 0){
		console.log("No clubs...interesting choice.");
	}else{
		console.log("$"+clubArray.length*50);
	}
}
	tabulateFinalCost();
	
	
	
	function rollDie(){
		
		var finalCalcEl = document.getElementById("finalCalc");
		
		
		
		var weapons = weaponArray.length*200;
		var ammunition = ammunitionArray.length*100;
		var clubs = clubArray.length*50;
		var receiptly = weapons+ammunition+clubs;
		
		//Step 1: Find the elements(s)
		var dieEl = document.getElementById("finalCalc");
		//Step 2: Make the change
		finalCalc.innerText = receiptly;
		


		
	}

	rollDie();
	
	
	
	
	
	 
