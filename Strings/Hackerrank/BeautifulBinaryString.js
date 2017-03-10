function main(input) {   
    input = input.split('\n');
    let n = input.shift();
    let B = input.shift();
    let count = 0;
    for(let i = 0; i < n;) {
        if(B[i] == 0 && B[i+1] == 1 && B[i+2] == 0) {
            count++;
            i = i + 3;
        } else {
            i++;
        }
        
    }
    console.log(count);

}

input = `7
0101010`;

main(input);