let n = 5;

for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) process.stdout.write("*");
  for (let j = 0; j < 2 * i; j++) process.stdout.write(" ");
  for (let j = n; j > i; j--) process.stdout.write("*");

  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) process.stdout.write("*");
  for (let j = 0; j < 2 * (n - i - 1); j++) process.stdout.write(" ");
  for (let j = 0; j <= i; j++) process.stdout.write("*");

  console.log();
}


// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
