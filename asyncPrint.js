// 2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, ..., seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c” is printed in 4 seconds, ...

Array.prototype.asyncPrint = async function () {
  const arr = this;
  let offset = 1000;
  let i = 0;
  console.log(new Date());
  const sleep = (m) => new Promise((r) => setTimeout(r, m));

  while (i < arr.length) {
    await sleep(offset);
    console.log(arr[i], new Date());
    offset *= 2;
    i++;
  }
};

['a', 'b', 'c', 'd'].asyncPrint();
