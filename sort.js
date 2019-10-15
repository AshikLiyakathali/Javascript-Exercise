// Sorting Algorithms
// 1. Bubble Sort in javascript

// Following are the Time and Space complexity for the Bubble Sort algorithm.
// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

function bubbleSort(values)
{
    var length = values.length;
    var i, j, temp;
    for(i = 0; i < length; i++)
    {
        for(j = 0; j < length-i-1; j++)
        {
            if( values[j] > values[j+1])
            {
                // swapping the elements
                temp = values[j];
                values[j] = values[j+1];
                values[j+1] = temp;
            } 
        }
    }
    // printing the sorted array
    console.log("Sorted Array: ", values);
}

bubbleSort([5,4,3,2,1]);
bubbleSort([4,5,2,1,3]);
bubbleSort([9,7,8,6,5]);


// 2. Insertion Sort

// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

 
function insertionSort(values)
{
    var length = values.length;
    var i, j, key;
	for (i = 1; i < length; i++) 
	{
		j = i;
 		while (j > 0 && values[j - 1] > values[j]) 
 		{
 			key = values[j];
 			values[j] = values[j - 1];
 			values[j - 1] = key;
 			j--;
 		}
	}
    // printing the sorted array
    console.log("Sorted Array: ", values);
}

insertionSort([5,4,3,2,1]);
insertionSort([4,5,2,1,3]);
insertionSort([9,7,8,6,5]);


// 3. Selection sort

// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n2)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

// function to swap elements at the given index values

function swap(values, firstIndex, secondIndex) 
{   
    var temp;
    temp = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = temp;
}

// function to look for smallest element in the given subvaluesay
function indexOfMinimum(values, startIndex, n) 
{
    var minValue = values[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < n; i++) {
        if(values[i] < minValue) 
        {
            minIndex = i;
            minValue = values[i];
        }
    } 
    return minIndex;
}

function selectionSort(values){
    var length = values.length;
    for(var i = 0; i < length; i++){
        var index = indexOfMinimum(values, i, length);
        swap(values, i, index);
    }
        // printing the sorted array
        console.log("Sorted Array: ", values);

} 

selectionSort([5,4,3,2,1]);
selectionSort([4,5,2,1,3]);
selectionSort([9,7,8,6,5]);