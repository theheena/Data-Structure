function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let t = input.shift();
    
    for( let i = 0; i < t; i++) {
        let m = input.shift();
        let n = input.shift();
        let data = input.shift();
        data = data.split(' ');
        data = data.map(Number);
       
        for(let j = 0; j < n; j++) {
            for(let k = j+1; k < n; k++) {
                if(data[j] + data[k] == m) {
                    let temp = k + 1;
                    console.log(j+1 + " " + temp);
                    break;
                }
            }
        }
    }
} 

input = `2
4
5
1 4 5 3 2
4
4
2 2 4 3`;

processData(input);