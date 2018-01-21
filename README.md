# GoogleScholarship-JavaScript1

Murder Mystery Quiz (3-4)
 
code I modified: 

var room; // code was: var room = "ballroom";
var suspect; //code was:var suspect = "Mr. Kalehoff";

code that I added to make the game more real:

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
