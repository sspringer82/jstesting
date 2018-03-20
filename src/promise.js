function myAsyncFunction(fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject('Oh noez!');
      } else {
        resolve('Hello World');
      }
    }, 1000);
  });
}
