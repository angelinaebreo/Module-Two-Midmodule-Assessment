// Goal: 
// when I enter an invalid number of dice, like -2, an error message displays prompting me to enter a valid number.




document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.querySelector("#rollthedice");
  let historyRoll;
  let historySum;

  let numOfCLick = 0;

  rollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // error.textContent += ""
    


    numOfCLick++;
    const diceList = [
      { dice: "&#9856", value: 1 },
      { dice: "&#9857", value: 2 },
      { dice: "&#9858", value: 3 },
      { dice: "&#9859", value: 4 },
      { dice: "&#9860", value: 5 },
      { dice: "&#9861", value: 6 },
    ];

    const numOfDice = Number(document.querySelector("#num-of-dice").value);
    const result = document.querySelector("#dice-para");
    const sumOfDice = document.querySelector("#sum-para");
    const history = document.querySelector("div > ul");
    const error = document.querySelector("#error")
   

    let currentRoll = [];
    let currentSum = 0;
    
    if(numOfDice < 1) {
      
        error.textContent += `Please enter a valid number`
    } else {
      error.textContent += ""
    

    

      
      
      for (let i = 0; i < numOfDice; i++) {
        let randomN = Math.floor(Math.random() * Math.floor(diceList.length - 1));
        let dice = diceList[randomN].dice;
        currentRoll.push(dice);
        currentSum += diceList[randomN].value;
      }
      
      result.innerHTML = currentRoll.join("");
      sumOfDice.textContent = `Sum = ${currentSum}`;
      
      // if (numOfCLick === 0) {
        //   newLi = document.createElement("li").style.visibility="hidden";
        //   newLi.innerHTML = `${historyRoll} = ${historySum}`;
        //   history.appendChild(newLi);
        // } else 
    }

        if (numOfCLick > 1) {
         
          newLi = document.createElement("li");
          newLi.innerHTML = `${historyRoll} = ${historySum}`;
          history.appendChild(newLi);
          
        }
        
        historyRoll = currentRoll.join("");
        historySum = currentSum;
     
      
    
    });
});
