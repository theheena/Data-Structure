function processData(input) {
    //Enter your code here
    var temp = 0;
    var count = 0;
    for(i=1;i<=input[0]; i++){
        if(input[i] == temp){
            count = count + 2;
        }
        else{
            count++;
        }
        temp = input[i];
    }
    console.log(count);
}

input = [3,1,2,2];
processData(input); 