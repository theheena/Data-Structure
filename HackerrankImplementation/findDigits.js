function main(input) {
    input = input.split('\n');
    var t = input.shift();
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(input.shift());
        let temp = n;
        let rem;
        let count = 0;
        while(temp > 0) {
            rem = temp % 10;
            if(n%rem == 0) {
                count++;
            }
            temp = parseInt(temp/10);
        }
        console.log(count);
    }

}

input = `2
12
1012`;

main(input);