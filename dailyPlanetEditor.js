var enemyName = [
  "Lex",
  "Batman",
  "Darkseid",
  "Brainiac",
  "General Zod",
  "Doomsday",
];
function Who_Wins(istherekryptonite, enemyName) {
  if (!istherekryptonite) {
    return "Superman beats " + enemyName + ", of course";
  } else {
    return (
      "Depends on how quick Superman can get rid of the Kryptonite. " +
      enemyName +
      " could possibly win this one."
    );
  }
}

for (var i = 0; i < enemyName.length; i++) {
  var istherekryptonite;
  {
    if (i % 2 === 0) {
      istherekryptonite = true;
    } else {
      istherekryptonite = false;
    }
    console.log(Who_Wins(istherekryptonite, enemyName[i]));
  }
}

function HowAttractedIsLoisLaneToMe() {
  // 1 is not at all attracted, 10 is "super" attracted...
  return Math.floor(Mat.random() * 10 + 1);
}

console.log(HowAttractedIsLoisLaneToMe);

var clarkKent = true;
var superman = false;

while (clarkKent) {
  console.log("I'm just a nerdy columnist");
  var phoneBoothQuickChange = Math.random();
  if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    superman = true;
    console.log("Now I'm Superman!");
  }
}
