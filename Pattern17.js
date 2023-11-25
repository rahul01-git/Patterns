let n = 5;

for(let i = 0; i<n;i++){
    for(let j = n-1;j>i;j--) process.stdout.write(' ')
    for(let j = 0 ; j<=i;j++) process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+j))
    for(let j = i ; j>=1;j--) process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+j-1))

    console.log()
}

//    A
//   ABA
//  ABCBA
// ABCDCBA