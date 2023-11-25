let n = 5;

for(let i = 0 ; i<n;i++){
    for(let j = 0;j<=i;j++) process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+i) + ' ')
    console.log()
}

// A 
// B B
// C C C
// D D D D
// E E E E E