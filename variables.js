// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b);
// console.log(23 + 97);

// console.log(1 + 2 + 4 + 5 + 6 + 10 + 200);

// let mathEx = (4 + 6 + 9) / 77;

// console.log(mathEx);
//

// const maxNum = 57;

// let actual = maxNum - 13;

// let percentage = actual / maxNum;

// Three ways to decalre variable: var, let, const

// let name = "nhat";

// alert(`hello ${1}`);

// alert(`hello ${"name"}`);

// alert(`hello ${name}`);
// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// let age = 50;

// if (age < 14 || age > 90);

let login = prompt("Who's there?");

if (login === "Admin") {
  let password = prompt("Enter the password");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === "") {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (login === null || login === "") {
  alert("Canceled");
} else {
  alert("I dont know you");
}
