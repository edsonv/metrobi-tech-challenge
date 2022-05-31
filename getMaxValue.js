// unbounded knapsack problem type
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];

const capacity = 36;

function getMaxValue(capacity, carrotTypes) {
  let dp = new Array(capacity + 1);
  dp.fill(0);

  for (let i = 0; i <= capacity; i++) {
    for (let j = 0; j < carrotTypes.length; j++) {
      if (carrotTypes[j].kg <= i) {
        dp[i] = Math.max(
          dp[i],
          dp[i - carrotTypes[j].kg] + carrotTypes[j].price
        );
      }
    }
  }

  return dp[capacity];
}

console.log(getMaxValue(capacity, carrotTypes));
