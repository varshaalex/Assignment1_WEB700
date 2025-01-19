/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Varsha Maria Alex
*  Student ID: 180085235 Date: 18/01/2025
********************************************************************************/ 

//"Hello World" 

console.log("Hello World!");

//Creating the "Server Paths" 

const serverVerbs = ["GET",	"GET",	"GET",	"POST",	"GET",	"POST"];
const serverPaths = ["/",	"/about",	"/contact",	"/login",	"/panel",	"/logout"];
const serverResponses = ["Welcome to WEB700 Assignment 1",	"This assignment was prepared by Varsha Maria Alex",	"Varsha Maria Alex: vmalex@myseneca.ca", "User Logged In",	"Main Panel",	"Logout Complete"];

//Creating the "web server simulator" Function - "httpRequest" 

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++){
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path){
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

//Manual Testing the "httpRequest" Function 

console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("POST", "/login"));
console.log(httpRequest("PUT", "/")); 

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}


// automatic testing
const automateTests= () => {
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

  const randomRequest= () => {
    const randVerb = testVerbs[getRandomInt(testVerbs.length)];
    const randPath = testPaths[getRandomInt(testPaths.length)];
    console.log(httpRequest(randVerb, randPath));
  }

  const intervalId = setInterval(randomRequest, 1000);
  
  setTimeout(() => clearInterval(intervalId), 10000);
}

automateTests();