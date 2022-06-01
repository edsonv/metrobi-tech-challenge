// 2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, ..., seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c” is printed in 4 seconds, ...

Array.prototype.asyncPrintV1 = function () {
  let arr = this;
  let timeout = 1000;

  console.log(new Date());

  arr.forEach((element) => {
    let promise = new Promise(async (resolve, reject) => {
      await setTimeout(() => {
        resolve(element);
      }, timeout);
    });

    promise.then((resolved) => {
      console.log(resolved, new Date());
    });
    timeout *= 2;
  });
};

Array.prototype.asyncPrintV2 = async function () {
  const arr = this;
  let offset = 1000;
  let i = 0;
  console.log(new Date());
  const sleep = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

  while (i < arr.length) {
    await sleep(offset);
    console.log(arr[i], new Date());
    offset *= 2;
    i++;
  }
};

['a', 'b', 'c', 'd'].asyncPrintV1();
// console.log(Array.prototype.asyncPrint);
// ['a', 'b', 'c', 'd'].asyncPrintV2();
// console.log(Array.prototype.asyncPrintV2);
