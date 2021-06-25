let dieRolls=[]

let diceRollButton = document.querySelector("#rollButton")
let numDice = document.querySelector("#numDice")
let totalSpan = document.querySelector("#diceTotal")
let showAllRollsBtn = document.querySelector("#showAllBtn")
let resetButton = document.querySelector("#resetBtn")

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
resetButton.addEventListener("click", function(event){
  dieRolls=[]
  totalSpan.innerHTML = 0
  dieRollsList.innerHTML = ''
  numDice.value = ''
})

diceRollButton.addEventListener("click", function(event){
  let howManyToRoll = numDice.value;
    //  console.log(howManyToRoll)

  let sum = 0;

  for(let i=1; i<=howManyToRoll; i++){
    // get random number between 1 and 6
    let currentRoll= getRandomIntInclusive(1,6)
    // add current roll to array; sum an array in JS
    dieRolls.push(currentRoll)
    sum += currentRoll
  }
//  console.log(sum, dieRolls)

  totalSpan.innerHTML = sum
})

showAllRollsBtn.addEventListener("click", function(event){
// loop that loops over the dieRolls array and adds a <li> to the <ol> using .innerHTML

  for(let i=0; i < dieRolls.length; i++){
    dieRollsList.innerHTML+= "<li>" + dieRolls[i] + "</li>"}


})