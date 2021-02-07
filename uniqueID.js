//creates random num 0-35
function getRandomNum(max = 35) {
  let num = Math.random() * max;

  return Math.floor(num);
}

//a map to access a specific value
const alphaNumVal = new Map();
alphaNumVal.set(0, "0")
           .set(1, "1")
           .set(2, "2")
           .set(3, "3")
           .set(4, "4")
           .set(5, "5")
           .set(6, "6")
           .set(7, "7")
           .set(8, "8")
           .set(9, "9")
           .set(10, "A")
           .set(11, "B")
           .set(12, "C")
           .set(13, "D")
           .set(14, "E")
           .set(15, "F")
           .set(16, "G")
           .set(17, "H")
           .set(18, "I")
           .set(19, "J")
           .set(20, "K")
           .set(21, "L")
           .set(22, "M")
           .set(23, "N")
           .set(24, "O")
           .set(25, "P")
           .set(26, "Q")
           .set(27, "R")
           .set(28, "S")
           .set(29, "T")
           .set(30, "U")
           .set(31, "V")
           .set(32, "W")
           .set(33, "X")
           .set(34, "Y")
           .set(35, "Z");


//creates a unique ID of 6 alphanumeric values and returns the unique ID
function getUniqueID() {
  let uniqueID = "";

  for (let i = 0; i < 6; i++) {
    uniqueID = uniqueID + alphaNumVal.get(getRandomNum());
  }
  return uniqueID;
}

//exports getUniqueID() in order to be imported and used in other files
module.exports = getUniqueID;
