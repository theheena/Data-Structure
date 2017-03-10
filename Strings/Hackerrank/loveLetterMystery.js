function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let t = input.shift();
    for(let i = 0; i < t; i++) {
        let count = 0;
        let s = input.shift();
        for(let j = 0; j < parseInt(s.length/2); j++) {
            if(s[j]!=s[s.length-1-j]) {
                count = count + Math.abs(s[j].charCodeAt(0) - s[s.length-1-j].charCodeAt(0));
            }
        }
        console.log(count);
    }
} 

input = `4
abc
abcba
abcd
cba`;

processData(input);