let n = 5

for(let i = 1; i<=n;i++){
    for(let j = 1;j<=i;j++) process.stdout.write(String(j))
    for(let j = 0;j<2*(n-i);j++) process.stdout.write(" ")
    for(let j = i; j>=1;j--) process.stdout.write(String(j))

    console.log()
}

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321