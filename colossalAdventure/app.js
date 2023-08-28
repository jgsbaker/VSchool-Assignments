const readline = require("readline-sync");
let user = {
  name: "",
  hp: 100,
  inventory: [],
  hasHP: true,
};
let enemies = {
  name: [
    "Ogre",
    "Demon",
    "Cyclops",
    "Minotaur",
    "Temptation",
    "Megachurch CEO",
    "Prophet",
    "Believer",
    "Dragon",
    "Werewolf",
    "Unicorn",
    "Elf",
    "Centaur",
    "Fairy",
    "Witch",
    "TollCollector",
  ],
  hp: 60,
  canBefriend: false,
  hasHP: true,
};
console.log("'Hello? HellOOoo?!'");
console.log(
  "You open your eyes to a short, sprightly man above you. You look around."
);
console.log("It appears to be a forest, but not like one you've ever seen");
console.log(
  "'Ahem!' said the short man. 'My name is Baird. I am tasked with greeting all our arrivals.'"
);

user.name += readline.question("What is your name? ");
console.log(
  "'Hi " +
    user.name +
    "Your time on Earth has come to an end. You are now in the place between death and the afterlife.'"
);
console.log(
  "'If you are here, that means you have been granted the chance to cross the rainbow bridge.'"
);
console.log(
  "'But first you must find it and deal with the toll collector. It's a dangerous path covered with many enemies and others who could not make it.'"
);
console.log("'If you die here, your soul will be trapped here forever.'");
console.log(
  "After a quick exchange, Baird refuses to give you directions. There's a road ahead."
);
function chances(n) {
  return Math.random() < n;
}
function walk() {
  while (chances(1)) {
    let willWalk = readline.question("Press w to walk. ");
    console.log("or press p anytime for User Data");
    console.log(willWalk);
    if (willWalk === "w") {
      action();
    } else if (willWalk === "p") {
      print();
    }
  }
}
let enemyAppear = enemies.name;
walk();
function action() {
  while (chances(0.25)) {
    console.log(
      enemyAppear[Math.floor(Math.random() * enemyAppear.length)] +
        " has appeared!"
    );
    let option = readline.question(
      "Attack, befriend, or run? Press a, r, or b: " /**add b and befriend if u get it to work */
    );
    if (option === "a") {
      return attack();
    } else if (option === "r") {
      return run();
    } else if (option === "b");
    {
      return beFriend();
    }
  }
}
function damage() {
  return Math.floor(Math.random() * 20);
}
function subtract(n) {
  return Math.floor(n - damage());
}
function checkfor0() {
  if (user.hp <= 0) {
    user.hasHP = false;
    console.log("You have no HP left! Your soul will be trapped here forever!");
    process.exit();
  } else if (enemies.hp <= 0) {
    enemies.hasHP = false;
    enemyDrop();
  }
}
function attack() {
  while (user.hasHP === true && user.hasHP === true) {
    checkfor0();
    let uLife = subtract(user.hp);
    user.hp = uLife;
    let eLife = subtract(enemies.hp);
    enemies.hp = eLife;
    console.log("You attacked and the enemy has " + enemies.hp + " hp left.");
    console.log("They attacked and you have " + user.hp + " hp left.");
  }
}
function run() {
  while (chances(0.5)) {
    console.log("The enemy engaged in battle!");
    return attack();
  }
}
function enemyDrop() {
  let item = ["Coin", "Armor", "Food"];
  let itemChoice = Math.floor(Math.random() * item.length + 0);
  let drop = item[itemChoice];
  console.log(drop + " has been added to your inventory.");
  user.inventory.push(drop);
  walk();
}
function beFriend() {
  let friendlys =
    enemies.name[
      ("Dragon",
      "Werewolf",
      "Unicorn",
      "Elf",
      "Centaur",
      "Fairy",
      "Witch",
      "Believer",
      "TollCollector")
    ];
  if (enemyAppear === friendlys) {
    enemies.canBefriend = true;
  }
  if (enemies.canBefriend === true) {
    console.log("You try to be nonthreatening and kind.");
  }
  while (enemies.canBefriend === false) {
    console.log("The enemy attacked!");
    return attack();
  }
  while (
    enemies.canBefriend === true &&
    chances(0.35) &&
    enemyAppear != "TollCollector"
  ) {
    console.log("The enemy is leaving!");
  }
  while ((enemies.canBefriend = false || chances(0))) {
    return attack();
  }
  while (enemyAppear === "TollCollector") {
    let pay = readline.question("Try offering some coin by pressing c: ");
    if (pay === "c" && user.inventory.includes("Coin")) {
      console.log(
        "You did it! You walk across the rainbow bridge and spend eternity with your lived ones in Peace!"
      );
      process.exit();
    }
  }
}
function print() {
  console.log(user);
  let recover = readline.question(
    "If food or armor is present in inventory, press f or ar to recuperate hp. "
  );
  if (recover === "f" && user.inventory.includes("Food")) {
    user.hp += 20;
    console.log("You now have " + user.hp + " hp.");
  } else if (recover === "ar" && user.inventory.includes("Armor")) {
    user.hp += 40;
    console.log("You now have " + user.hp + " hp.");
  } else {
    return walk();
  }
}
