const sentence = "hello there from lighthouse labs";
let delay = 0; // set delay to start at 0

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // print out all the characters one at a time
  }, delay); // use the delay which starts at 0

  delay += 25;  // plus each delay by 25 ms
};

// Outside the loop create a new line
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
