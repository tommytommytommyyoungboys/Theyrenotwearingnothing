/**
 * Implementation of the Radix Sort algorithm.
 * 
 * Radix Sort is a non-comparative integer sorting algorithm that sorts
 * data with integer keys by grouping keys by individual digits which share
 * the same significant position and value.
 * 
 * Note: This implementation only works with non-negative integers.
 * 
 * Time Complexity:
 * - Best: O(nk) where n is the number of elements and k is the number of digits
 * - Average: O(nk)
 * - Worst: O(nk)
 * 
 * Space Complexity: O(n + k) where k is the range of input
 * 
 * @param arr The array of numbers to be sorted
 * @returns The sorted array
 */
export function radixSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  
  // Handle empty arrays or arrays with a single element
  if (result.length <= 1) {
    return result;
  }
  
  // Validate that all elements are non-negative integers
  if (result.some(num => num < 0 || !Number.isInteger(num))) {
    throw new Error('Radix sort only works with non-negative integers');
  }
  
  // Find the number with the most digits
  const maxDigits = getMaxDigits(result);
  
  // Perform counting sort for each digit position
  for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
    result.splice(0, result.length, ...bucketize(result, digitPlace));
  }
  
  return result;
}

/**
 * Gets the number of digits in the largest number in the array.
 * 
 * @param arr The array of numbers
 * @returns The maximum number of digits
 */
function getMaxDigits(arr: number[]): number {
  let maxDigits = 0;
  
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(arr[i]));
  }
  
  return maxDigits;
}

/**
 * Gets the number of digits in a number.
 * 
 * @param num The number to count digits for
 * @returns The number of digits
 */
function getDigitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

/**
 * Gets the digit at the specified place value.
 * For example, getDigit(12345, 0) returns 5 (the rightmost digit).
 * 
 * @param num The number to extract the digit from
 * @param place The place value (0 for ones, 1 for tens, etc.)
 * @returns The digit at the specified place
 */
function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Groups numbers into buckets based on the digit at the specified place.
 * 
 * @param arr The array of numbers
 * @param digitPlace The digit place to bucketize by
 * @returns The array with elements arranged according to the specified digit
 */
function bucketize(arr: number[], digitPlace: number): number[] {
  // Create 10 buckets (0-9)
  const buckets: number[][] = Array.from({ length: 10 }, () => []);
  
  // Place each number in the appropriate bucket based on its digit
  for (let i = 0; i < arr.length; i++) {
    const digit = getDigit(arr[i], digitPlace);
    buckets[digit].push(arr[i]);
  }
  
  // Flatten the buckets back into a single array
  return buckets.flat();
}
