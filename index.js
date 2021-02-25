document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.querySelector("#rollthedice");
  let historyRoll;

  let numOfCLick = 0;

  rollBtn.addEventListener("click", (event) => {
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

    event.preventDefault();
    let currentRoll = [];
    let currentSum = 0;

    for (let i = 0; i < numOfDice; i++) {
      let randomN = Math.floor(Math.random() * Math.floor(diceList.length - 1));
      let dice = diceList[randomN]["dice"];
      currentRoll.push(dice);
      currentSum += diceList[randomN]["value"];
    }

    result.innerHTML = currentRoll.join("");
    sumOfDice.textContent = currentSum;

    if (numOfCLick === 0) {
      newLi = document.createElement("li").style.visibility = "hidden";
      newLi.innerHTML = `${historyRoll}=${historySum}`;
      history.appendChild(newLi);
    } else if (numOfCLick > 1) {
      newLi = document.createElement("li");
      newLi.innerHTML = `${historyRoll}=${historySum}`;
      history.appendChild(newLi);
    }

    historyRoll = currentRoll.join("");
    historySum = currentSum;
  });
});
