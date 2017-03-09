function main(input) {
    input = input.split("\n");
    var n = input.shift();
    for(var a0 = 0; a0 < n; a0++){
        var s = input.shift();
        let hash = {};
        let k = 0;
        for(let i =0; i < s.length; i++) {
            if(!hash[s[i]]) {
                hash[s[i]] = 1;
                k++;
            }
        }
        console.log(k);
    }

}

input = `2
abcd
abab`;

main(input);