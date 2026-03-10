console.time('heavy-task');

function heavyTask() {
  let sum = 0;
  for (let i = 0; i < 2_000_000_000; i++) {
    sum += i;
  }
  return sum;
}

console.log('Starting heavy task...');
const result = heavyTask();
console.log('Result:', result);

console.timeEnd('heavy-task');

// This will execute ONLY AFTER heavy task finishes
setTimeout(() => {
  console.log('Timeout executed');
}, 0);
