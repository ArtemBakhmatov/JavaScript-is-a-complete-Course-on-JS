import { roundToFiveDigits } from "./helpers.js";

const firstSelect = document.querySelector("[data-first-select]");
const secondSelect = document.querySelector("[data-second-select]");

const swapBtn = document.querySelector("[data-swap-btn]");
const comparisonInfo = document.querySelector("[data-comparison-info]");

const firstInput = document.querySelector("[data-first-input]");
const secondInput = document.querySelector("[data-second-input]");

const BASE_URL = "https://open.er-api.com/v6/latest";
const FIRST_DEFAULT_CURRENCY = "USD";
const SECOND_DEFAULT_CURRENCY = "BYN";

let rates = {};

// select events
firstSelect.addEventListener("change", () => updateExchangeRates());
secondSelect.addEventListener("change", () => renderInfo(rates));

// input events
firstInput.addEventListener("input", () => {
  secondInput.value = roundToFiveDigits(firstInput.value * rates[secondSelect.value]);
})
secondInput.addEventListener("input", () => {
  firstInput.value = roundToFiveDigits(secondInput.value / rates[secondSelect.value]);
})

// swap button event
swapBtn.addEventListener("click", () => {
  const temp = firstSelect.value;
  firstSelect.value = secondSelect.value;
  secondSelect.value = temp;

  updateExchangeRates();
})

// update exchange rates
const updateExchangeRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${firstSelect.value}`);
    const data = await response.json();

    rates = data.rates;
    renderInfo();
  } catch (error) {
    console.error(error.message);
  }
}

// render info
const renderInfo = () => {
  comparisonInfo.textContent = `1 ${firstSelect.value} = ${rates[secondSelect.value]} ${secondSelect.value}`;

  firstInput.value = rates[firstSelect.value];
  secondInput.value = rates[secondSelect.value];
}

// populate selects
const populateSelect = () => {
  firstSelect.innerHTML = "";
  secondSelect.innerHTML = "";

  for (const currency of Object.keys(rates)) {
    firstSelect.innerHTML += `
      <option value="${currency}" ${currency === FIRST_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>
    `
    secondSelect.innerHTML += `
      <option value="${currency}" ${currency === SECOND_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>
    `
  }
}

// getInitialRates - initial fn to populate selects
const getInitialRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${FIRST_DEFAULT_CURRENCY}`);
    const data = await response.json();

    rates = data.rates;
    populateSelect();
    renderInfo();
  } catch (error) {
    console.error(error.message);
  }
}

getInitialRates();