function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let t = input.shift();
    for(let i = 0; i < t; i++) {
        let s = input.shift();
        let ans = "Funny";
        for(let j = 1; j < s.length; j++) {
            if(Math.abs((s[j].charCodeAt(0) - s[j-1].charCodeAt(0))) != Math.abs((s[s.length-1-j].charCodeAt(0) - s[s.length-j].charCodeAt(0)))) {
                ans = "Not Funny";
            }
        }
        console.log(ans);
    }
} 

input = `2
acxz
bcxz`;

processData(input);