/*Croasmun Zachery
 * SDI 1303 Project 2
 * 14 FEB 2013
 */


alert("this is our story")



var sharkName = "Iron Tooth",
	fishNames = [" Gill", " Finn", " Fudge"],
	fishWeight= [10, 25 , 52],
	catchTime = [30, 20, 8];
	

console.log("I the mighty " + sharkName + " can see 3 fish by the names of " + fishNames );


var fishSeen = function(fishNumber){
	var iSee = fishNames[fishNumber],
		weight = fishWeight[fishNumber],
		iCatch = catchTime[fishNumber];
		
		console.log(sharkName + " decides to chase " + iSee)
		
	if(weight < 51){
		if(iCatch < 31)
		console.log(' "yummy" says ' + sharkName + " I'm going to eat you!")
		
	}else {console.log(iSee + " Your lucky I'm not that hungry.")}
	
};






