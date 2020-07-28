// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinSymbols = ['| ','/ ','- ','\\ ','| '];
let delay = 0;

for (let i=0; i<spinSymbols.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinSymbols[i]}`);
  }, delay)
  delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1000);

