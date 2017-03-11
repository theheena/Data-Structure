function main() {
    var Q = parseInt(readLine());
    
    for(var a0 = 0; a0 < Q; a0++){
        var L_temp = readLine().split(' ');
        var L = parseInt(L_temp[0]);
        var R = parseInt(L_temp[1]);
        var init = 0;
        var out = 0;
        var temp;      
        for(var i = 1; i <= R; i++){
            if(i < L){
                temp = init^i;
                init = temp;
            }
            else if(i >= L){
                temp = temp^i;
                out = out^temp;
            }
        }
        console.log(out);
    }
    //console.log(arr);

}
