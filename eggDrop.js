// https://www.geeksforgeeks.org/eggs-dropping-puzzle-binomial-coefficient-and-binary-search-solution/
//medium.com/@khopsickle/2-eggs-and-100-floors-a032beb77aaa

// Javascript program to find minimum
// number of trials in worst case.

// Find sum of binomial coefficients xCi
// (where i varies from 1 to n). If the sum
// becomes more than K

https: function binomialCoeff(x, n, k) {
  var sum = 0,
    term = 1;
  for (var i = 1; i <= n && sum < k; ++i) {
    term *= x - i + 1;
    term /= i;
    sum += term;
  }
  return sum;
}

// Do binary search to find minimum
// number of trials in worst case.
function minTrials(n, k) {
  // Initialize low and high as 1st
  //and last floors
  var low = 1,
    high = k;

  // Do binary search, for every mid,
  // find sum of binomial coefficients and
  // check if the sum is greater than k or not.
  while (low < high) {
    var mid = parseInt((low + high) / 2);
    if (binomialCoeff(mid, n, k) < k) low = mid + 1;
    else high = mid;
  }
  return low;
}

// Driver code
console.log(minTrials(2, 100));
