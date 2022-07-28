let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord1El = document.getElementById("passWord1")
let passWord2El = document.getElementById("passWord2")
//passWord2El
function generate(){
    let randomItem1 = Math.floor(Math.random() * characters.length)
    randomItem1 = characters[randomItem1]
    let randomItem2 = Math.floor(Math.random() * characters.length)
    randomItem2 = characters[randomItem2]
    let randomItem3 = Math.floor(Math.random() * characters.length)
    randomItem3 = characters[randomItem3]
    let randomItem4 = Math.floor(Math.random() * characters.length)
    randomItem4 = characters[randomItem4]
    let randomItem5 = Math.floor(Math.random() * characters.length)
    randomItem5 = characters[randomItem5]
    let randomItem6 = Math.floor(Math.random() * characters.length)
    randomItem6 = characters[randomItem6]
    let randomItem7 = Math.floor(Math.random() * characters.length)
    randomItem7 = characters[randomItem7]
    let randomItem8 = Math.floor(Math.random() * characters.length)
    randomItem8 = characters[randomItem8]
    let randomItem9 = Math.floor(Math.random() * characters.length)
    randomItem9 = characters[randomItem9]
    let randomItemq = Math.floor(Math.random() * characters.length)
    randomItemq = characters[randomItemq]
    let randomItemw = Math.floor(Math.random() * characters.length)
    randomItemw = characters[randomItemw]
    let randomIteme = Math.floor(Math.random() * characters.length)
    randomIteme = characters[randomIteme]
    let randomItemr = Math.floor(Math.random() * characters.length)
    randomItemr = characters[randomItemr]
    let randomItemt = Math.floor(Math.random() * characters.length)
    randomItemt = characters[randomItemt]
   let password = randomItem1+randomItem2+randomItem3+randomItem4+randomItem5+randomItem6+randomItem7+randomItem8+randomItem9+randomItemq+randomItemw+randomIteme+randomItemr+randomItemr+randomItemt
   passWord1El.value = password
   
   let randomI1 = Math.floor(Math.random() * characters.length)
    randomI1 = characters[randomI1]
    let randomI2 = Math.floor(Math.random() * characters.length)
    randomI2 = characters[randomI2]
    let randomI3 = Math.floor(Math.random() * characters.length)
    randomIt3 = characters[randomI3]
    let randomI4 = Math.floor(Math.random() * characters.length)
    randomI4 = characters[randomI4]
    let randomI5 = Math.floor(Math.random() * characters.length)
    randomI5 = characters[randomI5]
    let randomI6 = Math.floor(Math.random() * characters.length)
    randomI6 = characters[randomI6]
    let randomI7 = Math.floor(Math.random() * characters.length)
    randomI7 = characters[randomI7]
    let randomI8 = Math.floor(Math.random() * characters.length)
    randomI8 = characters[randomI8]
    let randomI9 = Math.floor(Math.random() * characters.length)
    randomI9 = characters[randomI9]
    let randomIq = Math.floor(Math.random() * characters.length)
    randomIq = characters[randomIq]
    let randomIw = Math.floor(Math.random() * characters.length)
    randomIw = characters[randomIw]
    let randomIe = Math.floor(Math.random() * characters.length)
    randomIe = characters[randomIe]
    let randomIr = Math.floor(Math.random() * characters.length)
    randomIr = characters[randomIr]
    let randomIt = Math.floor(Math.random() * characters.length)
    randomIt = characters[randomIt]
    let passwd = randomI1+randomI2+randomI3+randomI4+randomI5+randomI6+randomI7+randomI8+randomI9+randomIq+randomIw+randomIe+randomIr+randomIr+randomIt
    passWord2El.value = passwd
} 
    
  