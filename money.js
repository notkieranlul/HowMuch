const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://v6.exchangerate-api.com/v6/4e177d8a2c4ff2bea51098be/latest';
const ratesByBase = {};

const currencies = {
  GBP: 'British Pound Sterling',
};

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

async function fetchRates(base = 'GBP') {
  const res = await fetch(`${endpoint}/${base}`);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);