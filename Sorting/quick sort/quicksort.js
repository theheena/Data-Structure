function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    let arr = input.splice(0,1)[0].split(" ");
    arr = arr.map(Number);
    quickSort(arr, 0, n-1);
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
    out = "";
    for (let j = 0; j < arr.length; j++){
      out+= arr[j] + " ";
    }
    console.log(out);
    return (i + 1);
}

input = `5
4 5 3 7 2`;

processData(input);
