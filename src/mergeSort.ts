/**
 * Implementation of the Merge Sort algorithm.
 * 
 * Merge Sort is a divide-and-conquer algorithm that divides the input array into
 * two halves, recursively sorts them, and then merges the sorted halves.
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * 
 * Space Complexity: O(n) - Requires additional space for the merge step
 * 
 * @param arr The array to be sorted
 * @returns The sorted array
 */
export function mergeSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Base case: arrays with 0 or 1 elements are already sorted
  if (length <= 1) {
    return result;
  }
  
  // Divide the array into two halves
  const middle = Math.floor(length / 2);
  const leftHalf = result.slice(0, middle);
  const rightHalf = result.slice(middle);
  
  // Recursively sort both halves and merge them
  return merge(
    mergeSort(leftHalf),
    mergeSort(rightHalf)
  );
}

/**
 * Merges two sorted arrays into one sorted array.
 * 
 * @param left The first sorted array
 * @param right The second sorted array
 * @returns A new array with all elements from both arrays, sorted
 */
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add any remaining elements from the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Add any remaining elements from the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  
  return result;
}
