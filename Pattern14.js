let n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + j ) + ' ');
    }
    console.log();
}

// A 
// A B
// A B C
// A B C D
// A B C D E