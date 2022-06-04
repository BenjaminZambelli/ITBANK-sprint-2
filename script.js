const namePerson = document.getElementById("name");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const ul = document.getElementById("unorderedList");
const total = document.getElementById("total");
const contribution = document.getElementById("contribution");

let personCounter = 0;
let amountArray = [];

button.addEventListener("click", () => {
  if (amount.value !== "" && namePerson.value !== "") {
    personCounter += 1;
    const li = document.createElement("li");
    li.innerHTML = `${namePerson.value}: $${amount.value}`;
    li.setAttribute("class", "list-group-item");
    ul.appendChild(li);
    amountArray.push(parseInt(amount.value));
    let amountArraySum = amountArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    total.innerHTML = `Total: $${amountArraySum}`;
    contribution.innerHTML = `Contribution of each person: $${(
      amountArraySum / personCounter
    ).toFixed(2)}`;
    console.log(amountArray);
    console.log(amountArraySum);
  }
});
