/**
 * Implementation of the Insertion Sort algorithm.
 * 
 * Insertion Sort works by building a sorted array one element at a time.
 * It takes each element from the unsorted portion and inserts it into
 * its correct position in the sorted portion of the array.
 * 
 * Time Complexity:
 * - Best: O(n) when array is already sorted
 * - Average: O(n²)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1) - In-place sorting algorithm
 * 
 * @param arr The array to be sorted
 * @returns The sorted array
 */
export function insertionSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Start from the second element (index 1)
  for (let i = 1; i < length; i++) {
    // Store the current element that needs to be inserted
    const key = result[i];
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    
    // Insert the current element at its correct position
    result[j + 1] = key;
  }
  
  return result;
}
