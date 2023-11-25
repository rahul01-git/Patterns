let n = 5;

for(let i = n ; i>0;i--){
    for(let j = 0;j<i;j++) process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+j) + ' ')
    console.log()
}

// A B C D E 
// A B C D
// A B C
// A B
// A