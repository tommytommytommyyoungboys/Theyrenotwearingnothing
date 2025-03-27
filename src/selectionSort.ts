/**
 * Implementation of the Selection Sort algorithm.
 * 
 * Selection Sort works by dividing the array into a sorted and an unsorted region.
 * It repeatedly selects the smallest (or largest) element from the unsorted region
 * and swaps it with the first element of the unsorted region.
 * 
 * Time Complexity:
 * - Best: O(n²)
 * - Average: O(n²)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1) - In-place sorting algorithm
 * 
 * @param arr The array to be sorted
 * @returns The sorted array
 */
export function selectionSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  for (let i = 0; i < length - 1; i++) {
    // Assume the current index contains the minimum value
    let minIndex = i;
    
    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the element at index i
    // (only if the minimum element is not already at its correct position)
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}
