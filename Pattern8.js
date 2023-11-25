let n = 5;

for(let i = n ; i>0; i--){
    for(let j = 0;j<n-i;j++) process.stdout.write(' ')
    for(let j = 0; j<2*i-1;j++) process.stdout.write('*')
    console.log()
}

// *********
//  *******
//   *****
//    ***
//     *