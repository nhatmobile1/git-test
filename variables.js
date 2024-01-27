//----- Conditional exercise -----//

// let login = prompt("Who's there?");

// if (login === "Admin") {
//   let password = prompt("Enter the password");
//   if (password === "TheMaster") {
//     alert("Welcome!");
//   } else if (password === null || password === "") {
//     alert("Canceled");
//   } else {
//     alert("Wrong Password");
//   }
// } else if (login === null || login === "") {
//   alert("Canceled");
// } else {
//   alert("I dont know you");
// }

// let shoppingDone = false;
// let childsAllowance;

// // We don't need to explicitly specify 'shoppingDone === true'
// if (shoppingDone) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }

// alert(childsAllowance);

// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent =
//         "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//       break;
//     case "rainy":
//       para.textContent =
//         "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//       break;
//     case "snowing":
//       para.textContent =
//         "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//       break;
//     case "overcast":
//       para.textContent =
//         "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//       break;
//     default:
//       para.textContent = "";
//   }
// }

// const select = document.querySelector("select");
// const html = document.querySelector(".output");

// select.addEventListener("change", () => {
//   const choice = select.value;

//   switch (choice) {
//     case "white":
//       update("white", "black");
//       break;
//     case "black":
//       update("black", "white");
//       break;
//     case "purple":
//       update("purple", "yellow");
//       break;
//     case "yellow":
//       update("yellow", "purple");
//   }
// });

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

//--------- More Conditional exercises -----------//
// if (machineActive === "true") {
//   if (score >= 0 && score <= 19) {
//     response = "That was a terrible score — total fail!";
//   } else if (score >= 20 && score <= 39) {
//     response =
//       "You know some things, but it's a pretty bad score. Needs improvement.";
//   } else if (score >= 40 && score <= 69) {
//     response = "You did a passable job, not bad!";
//   } else if (score >= 70 && score <= 89) {
//     response = "That's a great score, you really know your stuff.";
//   } else {
//     response = "What an amazing score! Did you cheat? Are you for real?";
//   }
// } else {
//   response = "Machine is off";
// }

// let officialName = prompt("What is the official name of Javascript?", "");

// if (officialName === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know ECMAScript?");
// }

// officialName === "ECMAScript"
//   ? alert("Right!")
//   : alert("You don't know ECMAScript?");

// let result = a + b < 4 ? "Below" : "Over";

// let login = prompt("What is your login?", "");

// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

// alert(message);

//------ Switch exercises -------//

// let browser = prompt("What browser do you use?", "");

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

let login = prompt("What is your login?");
let password;

if (login === "Admin") {
  password = prompt("What is the password?");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === "") {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (login === null || login === "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}

let choice = "White";
switch (choice) {
  case White:
    bgColor = "White";
    textColor = "Black";
    break;
  case Black:
    bgColor = "Black";
    textColor = "White";
    break;
}
