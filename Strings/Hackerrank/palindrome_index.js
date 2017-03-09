function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    
    for(let i = 0; i < n; i++) {
        let s = input.shift();
        let ans = -1;
        let n1 = s.length;
        for(let j = 0; j < parseInt(s.length/2); j++) {
            if(n1 > 2) {
                if(s[j] != s[n1-1-j]) {
                    if(s[j+1] == s[n1-1-j]){
                        ans = j;
                       break;
                    } else if(s[j] == s[n1-2-j]) {
                        ans = (n1-1-j);
                        break;
                    }
                }
            } else if(n1 == 2) {
                if(s[0]!=s[1]) {
                    ans = 0;
                }
            }
        }
        console.log(ans);
    }
} 

input = `3
aaab
baa
aaa`;

processData(input);