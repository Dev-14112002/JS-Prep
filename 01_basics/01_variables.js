const accountId = 144;
let accountEmail = "gulatisaksham1111@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 2;

accountEmail = "sg@sg.com";
accountPassword = "231231312";
accountCity = "Noida";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
