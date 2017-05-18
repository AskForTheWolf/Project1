//round #
//data-quad array to keep track of what is lit
//data-quad[0] = null, 1 = red ETC... MAYBE? WHY DO I NEED AN ARRAY?
//CAN THIS JUST BE HANDLED BY ATTR DATA QUAD?
//LET'S INCLUDE BOTH WAYS, ASK ABOUT THIS TOMORROW AM
//BUT I THINK I NEED THE ARRAY TO KEEP TRACK OF WHAT GOT LIT UP
// on new game button click, start game function()
/*

start game function(){
containing the data-quad values for pieces
Start game function contains FOR LOOP
var random value 1-4,
PUSH RANDOM TO ARRAY TO KEEP TRACK OF WHAT HAS BEEN SELECTED
Calls the light-up function on FOR THAT RANDOM VALUE LIGHT-UP(RANDOM)

light-up function(){
  FOR LOOP, ITERATING THROUGH AND LIGHTING UP EACH VALUE
  (WE GET EACH VALUE FROM PREVIOUSLY PUSHING THE RANDOM VALUE INTO THE ARRAY)
  LIGHT UP THE ARRAY (EVEN IF IT IS JUST THE 1 VALUE)
  fade in the corresponding data-quad piece FROM VAR
  do this by adjusting CSS opacity for data-quad piece
  OR do it by switch/case, use corresponding .class for opacity attr
  light up for 1-2 seconds (depending on how it looks)
  FADE OUT DATA-QUAD BACK TO 0.5 OPACITY

}

Record li click after light up function
get value for li click attr data-quad and compare it to var random
if recorded click attr data-quad != THE LAST IN THE ARRAY, NOT RANDOM
(BECAUSE YOU MIGHT END UP MESSING THIS UP OR CALLING ANOTHER RANDOM OR SOMETHING)
end game function, display round value
else
  round ++
  CONTINUE LOOP
)

BUT SERIOUSLY, FIGURE OUT HOW TO PUSH THE NEWEST VALUE TO THE ARRAY AND REPEAT
FROM THE START EACH ITERATION (I THINK I MAY HAVE)
OH BOY, THAT'S 40 LINES PSUEDOCODE INVOLVING CSS, JS AND JQUERY ON VALUES,
ARRAYS, AND ELEMENTS THAT YOU DON'T COMPLETELY KNOW HOW TO HANDLE.  GLHF
*/

var roundNumber=0;
var lit = [];
var newGame = $("#newGame");
var field = $(".gameWrapper");
  var red = $(".red");
  var green = $(".green");
  var blue = $(".blue");
  var yellow = $(".yellow");
  var clickArray = [];

newGame.on("click", function(){
  lit=[];
  console.log("New Game!");
  //while(roundNumber === lit.length){
  var random = Math.floor(Math.random() * 4) + 1;
  console.log(random);
  lit.push(random);
  console.log(lit);
  lightUp(lit);
var clicked = checkClick(random);
  if (clicked){
    roundNumber++;
    while (roundNumber >= lit.length )
    {
      var random = Math.floor(Math.random() * 4) + 1;
      lightUp(random);
    }
  }

  });
//}


function lightUp(lit){

      for (i = 0; i<=lit.length; i++){

          if (lit[i] === 1){
            setTimeout(function(){
              red.animate({opacity:1.0}, 1300);
              red.animate({opacity:0.2}, 200);
              console.log("CLICK ON RED DAMMIT");
            }, i*1500);
      }
      else if(lit[i] ===2){
setTimeout(function(){
        green.animate({opacity:1.0}, 1300);
        green.animate({opacity:0.2}, 200);
      }, i*1500);
      }

      else if(lit[i] ===3){
setTimeout(function(){
        blue.animate({opacity:1.0}, 1300);
        blue.animate({opacity:0.2}, 200);
    }, i*1500);
  }
      else if (lit[i]===4) {
        setTimeout(function(){
        yellow.animate({opacity:1.0}, 1300);
        yellow.animate({opacity:0.2}, 200);
      }, i*1500);
      }
    }
}

    function checkClick(lit){
      if (lit === 1){
        red.on("click", function(){
          console.log("Good click!")
          clickArray.push(lit);
          return true;
        });
      }
    }
