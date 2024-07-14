// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(drivers, "Bobby")); 


function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
console.log(fuzzyMatch(drivers, "S"));


const driverObjects = [
  { name: "Bobby", hometown: "Kisumu" },
  { name: "Sammy", hometown: "Naivasha" },
  { name: "Sally", hometown: "Kakamega" },
  { name: "Annette", hometown: "Eldoret" },
  { name: "Sarah", hometown: "Nairobi" },
  { name: "Bobby", hometown: "Mombasa" }
];
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
console.log(matchName(driverObjects, "Sammy"));



