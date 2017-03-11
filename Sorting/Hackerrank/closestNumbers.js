function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let n = input.shift();
    let arr = input.splice(0,1)[0].split(' ');
    arr = arr.map(Number);
    quickSort(arr,0,n-1);
    
    
    let out = arr[1] - arr[0];
    let ans = arr[0] + " " + arr[1] + " ";
    for(let i = 2; i < n; i++) {
        if(arr[i]-arr[i-1] < out) {
            out = arr[i] - arr[i-1];
            ans= "";
            ans = ans + arr[i-1] + " " + arr[i] + " ";
        } else if(arr[i] - arr[i-1] == out) {
            ans = ans + arr[i-1] + " " + arr[i] + " ";
        }
    }
    console.log(ans);
} 

    
    function quickSort(arr, p, r) {
        if(p < r) {
            let q = partition(arr, p, r);
            quickSort(arr, p, q-1);
            //console.log(arr);
            quickSort(arr, q+1, r);
            //console.log(arr);
        }
    }

    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j <= high- 1; j++)
        {
            if (arr[j] <= pivot)
            {
                i++;
                arr[j] = [arr[i], arr[i] = arr[j]][0];
            }
        }
        arr[i+1] = [arr[high], arr[high] = arr[i+1]][0];
        return (i + 1);
    }

input = `4
5 4 3 2`;

processData(input);