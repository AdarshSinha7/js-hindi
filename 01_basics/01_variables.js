const accountId =144553
let accountEmail="adarshsinha.cr7@gmail.com"
var accountPassword= "12345"
accountCity= "Jaipur"
let accountState;

// accountId=2 //not allowed

accountEmail="ad@ad.com"
accountPassword="21211"
accountCity="gorakhpur"

console.log(accountId);

/*
Prefer not to use var beacuse of the issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])