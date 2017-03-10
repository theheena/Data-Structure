function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let n = input.shift();
    let hash = {};
    let temp = [];
    let k = 0;
    let count = 0;
    for(let i = 0; i < n; i++) {
        let s = input.shift();
        for(let j = 0; j < s.length; j++) {
            if(!hash[s[j]]) {
                hash[s[j]] = 1;
                temp[k] = s[j];
                k++;
            } else if(hash[s[j]] == i && i > 0) {           
                hash[s[j]]++;
            }
        }
    }
    for(let i = 0; i < k; i++) {
        if(hash[temp[i]] == n) {
            count++;
        }
    }
    console.log(count);
} 

input = `3
abcdde
baccd
eeabg`;

processData(input);