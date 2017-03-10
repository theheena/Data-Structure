function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let n = input.shift();
    for(let i = 0; i < n; i++) {
        let s = input.shift();
        let count = 0;
        for(let j = 1; j < s.length; j++) {
            if(s[j] === s[j-1]) {
                count++;
            }
        }
        console.log(count);
    }
} 

input = `5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB`;

processData(input);