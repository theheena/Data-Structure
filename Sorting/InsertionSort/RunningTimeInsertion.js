function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    let arr = input.splice(0,1)[0].split(" ");
    arr = arr.map(Number);
    
    let i, j, key;
    let runningTime = 0;
    for(i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while( j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
            runningTime++;
        }
        arr[j+1] = key;
        out = "";
        for (let j = 0; j < n; j++){
            out+= arr[j] + " ";
        }
    }
    console.log(runningTime);
} 


input = `5
2 1 3 1 2`;

processData(input);