
let i = 0;

setTimeout(() => alert(i), 1000); // ?100000000  999999999


for (let j = 0; j < 100; j++) {
  i++
}