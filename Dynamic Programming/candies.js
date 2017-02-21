function processData(input) {
    //Enter your code here
    let temp = 0;
    let count = [];
    input = input.split("\n");
    input.map(Number);
    for(let i=1;i<=input[0]; i++){
        count[i] = 1;
    }
    for(let i=1;i<=input[0]-1;i++){
        if(input[i+1]>input[i]){
            count[i+1]  = count[i] + 1;
        }
    }
    for(let i=input[0]-1;i>=1;i--){
        if(input[i] > input[i+1]){
            if(count[i]<=count[i+1]){
                count[i] = count[i+1] + 1;
            }
        }
    }
    
    for(let i = 1;i<=input[0];i++){
        temp = temp + count[i];
        //console.log(count[i]);
    }
    console.log(temp);
}

input = `10
2
4
2
6
1
7
8
9
2
1`;
processData(input); 