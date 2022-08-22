const totalPlayerArray = [];
function choosePlayer(element) {
  const playerName = element.parentNode.parentNode.childNodes[1].innerText;
  const playerImage =
    element.parentNode.parentNode.parentNode.children[0].children[0].src;
  let topPlayersList = document.getElementById("top-players-list");

  let div = document.createElement("div");
  div.innerHTML = `
  <div class="mt-3">
              <div class="shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/30 rounded-lg p-1">
                <div class="basis-1/4 flex py-2 pl-5 items-center justify-start">
                  <img
                    src="${playerImage}"
                    class="rounded-full w-10 h-10 object-cover"
                    alt=""
                    srcset=""
                  />
                  <h4 class="px-5 flex items-center ">${playerName}</h4>
                </div>
              </div>
            </div>
  `;
  topPlayersList.appendChild(div);

  const playerInfo = {
    playerName: playerName,
    playerImage: playerImage,
  };

  totalPlayerArray.push(playerInfo);
}

let inputnum = document.getElementById("Per-Players-Budget").value;
let inputValue = inputnum.value;

function getInputTotal(inputDataId) {
  let inputnum = document.getElementById(inputDataId);
  let inputValue = inputnum.value;
  let inputValueFloat = parseFloat(inputValue);
  inputnum.innerText = "";
  return inputValueFloat;
}

function getTextData(elementID) {
  let elementnum = document.getElementById(elementID);
  let elementValue = elementnum.innerText;
  let elementValueFloat = parseFloat(elementValue);
  return elementValueFloat;
}

function setValue(previousValueId, newValue) {
  let setNewValue = (document.getElementById(previousValueId).innerText = newValue);
}

function additionCalculate(element) {
  let perPlayersBudgetText = getInputTotal("Per-Players-Budget");
  let numberOfPlayers = totalPlayerArray.length;
  let totalCost = numberOfPlayers * perPlayersBudgetText;

  setValue("player-total-cost", totalCost);
  return totalCost;
}

function calculateTotal(element) {
  let totalPlayersExpenses = additionCalculate(element);
  console.log(totalPlayersExpenses);
  let managerBudget = getInputTotal("Manager-Budget");
  let coachBudget = getInputTotal("Coach-Budget");
  let calculateTotalCost = totalPlayersExpenses + managerBudget + coachBudget;
  setValue("total-cost", calculateTotalCost);
}

function isitnan(value) {
  document.getElementById(value).addEventListener("keyup", function () {
    if (isNaN(this.value) || this.value.length < 0) {
      alert("That was not a number!");
      this.value = "";
      return false;
    }
  });
}

isitnan("Per-Players-Budget");
isitnan("Manager-Budget");
isitnan("Coach-Budget");
