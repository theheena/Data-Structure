let swaps = 0;
let shifts = 0

function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let n = input.shift();
    let arr = input.splice(0,1)[0].split(" ");
    let arr2 = arr;
    arr2 = arr2.map(Number);
    arr = arr.map(Number);
    quickSort(arr, 0, n-1);
    insertionSort(arr2, n)
    console.log(shifts-swaps);
} 

function quickSort(arr, p, r) {
    if(p < r) {
        let q = partition(arr, p, r);
        quickSort(arr, p, q-1);
        quickSort(arr, q+1, r);
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
            swaps++;
            arr[j] = [arr[i], arr[i] = arr[j]][0];         
        }
    }
    swaps++;
    arr[i+1] = [arr[high], arr[high] = arr[i+1]][0];  
    return (i + 1);
} 

function insertionSort(arr, n) {
    let i, j, key;
    for(i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while( j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
            shifts++;
        }
        arr[j+1] = key;
    }
    //console.log(shifts);
}

input = `5
4 5 3 7 2`;

processData(input);
