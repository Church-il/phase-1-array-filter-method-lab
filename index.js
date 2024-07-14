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
  { name: "Bobby", hometown: "Pittsburgh" },
  { name: "Sammy", hometown: "New York" },
  { name: "Sally", hometown: "Cleveland" },
  { name: "Annette", hometown: "Los Angeles" },
  { name: "Sarah", hometown: "San Francisco" },
  { name: "Bobby", hometown: "Tampa Bay" }
];
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
console.log(matchName(driverObjects, "Sammy"));



