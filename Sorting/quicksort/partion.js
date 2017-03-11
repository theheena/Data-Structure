function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    let data = input.splice(0,1)[0].split(" ");
    data = data.map(Number);
    let pivot = data[0];
    let i = n;
    for (let j = n-1; j >= 1; j--) {
        if(data[j] >= pivot) {
            i = i - 1;
            data[j] = [data[i], data[i] = data[j]][0];
        }    
    }
    data[0] = [data[i-1], data[i-1] = data[0]][0];
    
    out = "";
    for (let j = 0; j < n; j++){
      out+= data[j] + " ";
    }
    console.log(out);
} 


input = `7
5 8 1 3 7 9 2`;

processData(input);