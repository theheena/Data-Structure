function processData(input) {
    //Enter your code here
    let hash = {};
    let even = 0;
    let odd = 0;
    let temp = [];
    let j = 0;
    for(let i = 0; i < input.length; i++) {
        if(!hash[input[i]]) {
            hash[input[i]] = 1;
            temp[j] = input[i];
            j++;
        } else {
            hash[input[i]]++;
        }
    }
    for(let i = 0; i < j; i++) {
        if(hash[temp[i]]%2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    
    if(odd == 1) {
        console.log("YES");
    } else if(odd == 0 && even != 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
    
} 

input = `aaabbbb`;
processData(input);
