/**
 * Implementation of the Bubble Sort algorithm.
 * 
 * Bubble Sort works by repeatedly stepping through the list, comparing
 * adjacent elements and swapping them if they are in the wrong order.
 * The pass through the list is repeated until no swaps are needed.
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
export function bubbleSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Flag to optimize when array becomes sorted before all iterations
  let swapped: boolean;
  
  for (let i = 0; i < length; i++) {
    swapped = false;
    
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Compare adjacent elements
      if (result[j] > result[j + 1]) {
        // Swap if they are in the wrong order
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) {
      break;
    }
  }
  
  return result;
}
