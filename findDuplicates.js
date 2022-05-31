// 1) Write a javascript function that finds the duplicate items in any given array.
Array.prototype.findDuplicates = function () {
  const arr = this;
  let count = {};
  let duplicates = [];
  arr.forEach((item) => {
    if (count.hasOwnProperty(item)) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  });

  for (let key in count) {
    if (count[key] > 1) {
      duplicates.push(key);
    }
  }

  console.log(duplicates);
};

[1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7].findDuplicates();
