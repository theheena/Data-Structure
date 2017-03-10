function processData(input) {
    //Enter your code here
    let hash = {};
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        if(!hash[input[i].toLowerCase()] && input[i] != " ") {
            hash[input[i].toLowerCase()] = 1;
            count++;
        }
    }
    if(count == 26) {
        console.log('pangram');
    } else {
        console.log('not pangram');
    }
} 

input = `We promptly judged antique ivory buckles for the next prize`;

processData(input);