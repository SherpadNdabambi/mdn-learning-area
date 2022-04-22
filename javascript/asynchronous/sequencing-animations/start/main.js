const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//the promise version of callback hell
/*const animation1 = alice1.animate(aliceTumbling, aliceTiming), promise1 = animation1.finished;

promise1.then(() => {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming), promise2 = animation2.finished;
  promise2.then(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  });
});*/

//promise chaining
/*const animation1 = alice1.animate(aliceTumbling, aliceTiming), promise1 = animation1.finished;

promise1
  .then(() => {
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  });*/

//async and await
async function performAnimations(){
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  alice3.animate(aliceTumbling, aliceTiming);
}

performAnimations();