const spinnerPositions = ['|', '/', '-', '\\', '|'];
const duration = 200;

let animateSpinner = function() {
  for (let i = 0; i < spinnerPositions.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerPositions[i]}  `);
    }, duration * i);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, spinnerPositions.length * duration);
};

animateSpinner();