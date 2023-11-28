let n = 3;
for (let i = 0; i < 2 * n - 1; i++) {
  for (let j = 0; j < 2 * n - 1; j++) {
    let top = i,
      left = j,
      right = 2 * n - 2 - j,
      bottom = 2 * n - 2 - i;

      process.stdout.write(String(n - Math.min(top,left,right,bottom)) + " ")
  }
  console.log()
}


// 3 3 3 3 3 
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3