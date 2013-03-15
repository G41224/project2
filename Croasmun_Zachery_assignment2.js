/*Croasmun Zachery
 * SDI 1303 Project 2
 * 14 FEB 2013
 */


//alert("this is our story")



var sharkName = "Iron Tooth",
	ironTummy = 51
	fishNames = ["Gill", "Finn", "Fudge"],
	fishWeight= [10, 25 , 52],
	catchTime = [30, 20, 8];
	

console.log("I the mighty " + sharkName + " can see 3 fish by the names of " + fishNames[0] + ", " + fishNames[1] + ", " + "and " + fishNames[2]);


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

fishSeen(1);

var chase = function(fish){
	var thatFish = fishNames[fish],
		time = catchTime[fish];
	
	console.log(sharkName + " starts to chase " + thatFish + "!")
	console.log('It will only take me ' + time + " minuets to catch you. I would say your prayers.")
	while(time > 0){
		
		console.log(time + " Minuets till I catch you " + thatFish + "!");
		time -= 2;
	};
	return console.log("Hahahahaha " + thatFish + " was Yummy!");
};

chase(1);

console.log("Is that another meal I see swiming over there.")

var newFish = function(name, size){
	
	var fishSize = size
	
	if (fishSize < ironTummy) {
		
		conaole.log(name + " Your going to be my next meal!")
		
	} else{
		
		console.log("That fish " + name + " is way to big for me to eat!")
		
	};	
	
};

newFish("john", 55);

var stillHungry = function (string){
	var ironStat = "But I am still so very Hungry"
	
	return console.log(ironStat + string)
	
};

stillHungry(" so I am going to look for more food");
fishSeen(0);
chase(0);
console.log("Now " + sharkName + " is full")
