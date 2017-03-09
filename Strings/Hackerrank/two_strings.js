function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    
    for(let i = 0; i < n; i++) {
        let a = input.shift();
        let b = input.shift();
        let hash = {};
        let temp = [];
        let k = 0;
        let ans;
        for(let j = 0; j < a.length; j++) {
            if(!hash[a[j]]) { 1;
                temp[k] = a[j];
                k++;
            } 
        }
        
        for(let j = 0; j < b.length; j++) {
            for(let m = 0; m < temp.length; m++) {
                if(b[j] === temp[m]) {
                    ans = "YES";
                    break;
                }
            }
        }
        
        if(ans === "YES") {
            console.log(ans);
        } else {
            console.log("NO");
        }
    }
} 

input = `2
hello
world
hi
wo`;

processData(input);