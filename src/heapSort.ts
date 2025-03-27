/**
 * Implementation of the Heap Sort algorithm.
 * 
 * Heap Sort works by building a max-heap from the input array, then repeatedly
 * extracting the maximum element and rebuilding the heap until the array is sorted.
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * 
 * Space Complexity: O(1) - In-place sorting algorithm
 * 
 * @param arr The array to be sorted
 * @returns The sorted array
 */
export function heapSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Build a max heap
  buildMaxHeap(result);
  
  // Extract elements one by one from the heap
  for (let i = length - 1; i > 0; i--) {
    // Move current root (maximum) to the end
    [result[0], result[i]] = [result[i], result[0]];
    
    // Call heapify on the reduced heap
    heapify(result, i, 0);
  }
  
  return result;
}

/**
 * Build a max heap from the array.
 * In a max heap, the parent node is always greater than or equal to its children.
 * 
 * @param arr The array to convert into a max heap
 */
function buildMaxHeap<T>(arr: T[]): void {
  const length = arr.length;
  
  // Start from the last non-leaf node and heapify all nodes
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }
}

/**
 * Heapify a subtree rooted at the given index.
 * This function maintains the max heap property.
 * 
 * @param arr The array representing the heap
 * @param heapSize The size of the heap
 * @param rootIndex The index of the root of the subtree to heapify
 */
function heapify<T>(arr: T[], heapSize: number, rootIndex: number): void {
  let largest = rootIndex;       // Initialize largest as root
  const left = 2 * rootIndex + 1;  // Left child
  const right = 2 * rootIndex + 2; // Right child
  
  // If left child is larger than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // If right child is larger than the largest so far
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  
  // If largest is not the root
  if (largest !== rootIndex) {
    // Swap root with the largest element
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    
    // Recursively heapify the affected subtree
    heapify(arr, heapSize, largest);
  }
}
