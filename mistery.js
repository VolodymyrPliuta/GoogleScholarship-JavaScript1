var room; 
var suspect;
var random = Math.random().toFixed(2) * 10;

if (random >= 7.5){
room = "ballroom";
suspect = "Mr. Kalehoff";
}
else if(random >= 5 && random <= 7.49 ){
    room = "billiards room";
    suspect = "Mrs. Sparr";
}
else if(random >= 2.5 && random <= 4.99){
    room = "gallery";
    suspect = "Ms. Van Cleve";
}
else{
    room = "dining room";
    suspect = "Mr. Parkes";
}
var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else {
    weapon = "poison";
    solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

