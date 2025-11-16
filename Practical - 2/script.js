const priceInput = document.querySelector("#prices");
const btn = document.querySelector("button");
const result = document.querySelector("h2");

const calculateTotalBill = (prices) =>
  +prices.reduce((sum, p) => sum + p * 1.18, 0).toFixed(2);

btn.addEventListener("click", () => {
  const rawValues = priceInput.value.split(",");

  const prices = rawValues
    .map((v) => v.trim())
    .filter(Boolean)
    .map(Number);

  const invalidIndex = prices.findIndex((p) => isNaN(p) || p <= 0);

  if (invalidIndex !== -1) {
    alert(
      `Invalid price: "${rawValues[
        invalidIndex
      ].trim()}" -> enter positive numbers only`
    );
    return;
  }

  const totalBill = calculateTotalBill(prices);
  result.textContent = `Total Bill (with 18% GST): ${totalBill}`;
  priceInput.value = "";
});
