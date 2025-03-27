/**
 * Implementation of the Quick Sort algorithm.
 * 
 * Quick Sort works by selecting a 'pivot' element from the array and 
 * partitioning the other elements into two sub-arrays according to whether
 * they are less than or greater than the pivot. The sub-arrays are then
 * recursively sorted.
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n²) when the array is already sorted or nearly sorted
 * 
 * Space Complexity: O(log n) average case due to recursion stack
 * 
 * @param arr The array to be sorted
 * @returns The sorted array
 */
export function quickSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  
  // Call the internal quickSort implementation
  quickSortInternal(result, 0, result.length - 1);
  
  return result;
}

/**
 * Internal implementation of quickSort that works on a specific range of the array.
 * 
 * @param arr The array being sorted
 * @param low The starting index of the range to sort
 * @param high The ending index of the range to sort
 */
function quickSortInternal<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort the sub-arrays
    quickSortInternal(arr, low, pivotIndex - 1);
    quickSortInternal(arr, pivotIndex + 1, high);
  }
}

/**
 * Partitions the array around a pivot element.
 * Elements less than the pivot are moved to the left,
 * and elements greater than the pivot are moved to the right.
 * 
 * @param arr The array to partition
 * @param low The starting index of the range to partition
 * @param high The ending index of the range to partition
 * @returns The final position of the pivot element
 */
function partition<T>(arr: T[], low: number, high: number): number {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];
  
  // Index of the smaller element
  let i = low - 1;
  
  // Traverse through all elements
  // Compare each element with the pivot
  for (let j = low; j < high; j++) {
    // If the current element is less than the pivot
    if (arr[j] < pivot) {
      // Increment the index of the smaller element
      i++;
      // Swap elements at i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Swap the pivot element with the element at (i + 1)
  // This puts the pivot in its correct sorted position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  // Return the pivot's index
  return i + 1;
}
