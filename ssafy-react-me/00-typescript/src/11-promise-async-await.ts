// --------------------------------------------------------------------------
// Promise, Async await

function main(): void {
  console.log("start!");

  // Promise + Async function with await
  delayPromise().then(async () => {
    console.log("1s");
    await delayPromise();
    console.log("2s");
    await delayPromise();
    console.log("3s");
    await delayPromise(500);
    console.log("3.5s");
    await delayPromise(1500);
    console.log("4.5s");
  });

  // callback hell
  // 참고: https://bit.ly/3r5iUfe

  // delay(() => {
  //   console.log('1s');
  //   delay(() => {
  //     console.log('2s');
  //     delay(() => {
  //       console.log('3s');
  //       delay(() => {
  //         console.log('4s');
  //       });
  //     });
  //   });
  // });
}

function delay(callback: () => void, time: number = 1000): void {
  setTimeout(callback, time);
}

function delayPromise(time: number = 1000): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

main();
