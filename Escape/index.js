const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello " + name);
function EscapeRoom() {
  let greeting = "You are trapped in a room. How would you like to proceed?";
  console.log(greeting);
  const options = readline.question("Find the key or Open the Door? ");
  while (options === "find") {
    const openWKey = readline.question(
      "You found the key! Would you like to open the door? "
    );
    if (openWKey === "yes") {
      console.log("Congratulations for escaping!");
      const playAgain = readline.question("Would you like to play again? ");
      if (playAgain === "yes") {
        EscapeRoom();
      } else if (playAgain === "no") {
        console.log("See ya next time!");
        process.exit();
      }
    } else if (openWKey === "no") {
      console.log("Go back and try again");
      EscapeRoom();
    }
  }
  while (options === "open") {
    const openWoKey = readline.question(
      "You need the key to open. Would you like to try sticking your hand through the hole? "
    );
    if (openWoKey === "yes") {
      console.log("You Died. Please try again.");
      EscapeRoom();
    } else if (openWoKey === "no") {
      console.log("Go back and try again");
      EscapeRoom();
    }
  }
}
EscapeRoom();
