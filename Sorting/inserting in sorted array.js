function processData(input) {
    //Enter your code here
    //input = parseInt(input);
    input = input.split("\n");
    var n = input[0];
    var input1 = input[1];
    input1 = input1.split(" ");
    input1 = input1.map(Number);
    var e = input1[n-1];
    var temp = false;
    var temp1 = false;
    var out = "";
    
    if(n == 1) {
       console.log(input1[0]); 
    } else {
    for (var i = n-2; i >= 0; i--){
        
        if(input1[i] < e) {
            input1[i+1] = e;
            temp = true;
        } else if(input1[i] > e) {
            input1[i+1] = input1[i];
            if(i == 0){
                temp1 = true;
            }
        }
        
        out = "";
        for (var j = 0; j < n; j++){
            out+= input1[j] + " ";
        }
        console.log(out);
        
        if( temp == true ) {
            break;
        }
        
      }
        if(temp1 == true) {
            out = "";
            input1[0] = e;
            for (var j = 0; j < n; j++){
                out+= input1[j] + " ";
            }
            console.log(out);
        }
    }
    
    
} 