let n = 5;
for(let i = 0; i<n;i++){
    for(let j = n-i-1;j<n;j++) process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+j)+ ' ')
    console.log()
}


// E 
// D E
// C D E
// B C D E
// A B C D E