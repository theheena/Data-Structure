function processData(input) {
    //Enter your code here
    let sum = 0;
    let count = [];
    input = input.split("\n");
    input = input.map(Number);
    let n = input[0];


    for(let i = 1; i <= n; i++){
        count[i] = 1;
    }


    for(let i = 1; i <= n-1; i++){
        if(input[i+1] > input[i]){
            count[i+1]  = count[i] + 1;
        }
    }


    for(let i = n-1; i >= 1; i--){
        if(input[i] > input[i+1]){
            if(count[i] <= count[i+1]){
                count[i] = count[i+1] + 1;
            }
        }
    }
    
    for(let i = 1; i <= n; i++){
        sum = sum + count[i];
    }
    console.log(sum);
}

input = `10
2
4
2
6
1
7
10
11
2
1`;
processData(input); 