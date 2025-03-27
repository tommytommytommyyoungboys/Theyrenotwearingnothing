# Theyrenotwearingnothing

## Array Sorting Algorithms

This repository contains implementations of various sorting algorithms in TypeScript. Each algorithm is implemented in its own file within the `src` directory.

### Available Sorting Algorithms

- **Bubble Sort**: A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
  - Time Complexity: Best O(n), Average/Worst O(n²)
  - Space Complexity: O(1)

- **Insertion Sort**: Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position.
  - Time Complexity: Best O(n), Average/Worst O(n²)
  - Space Complexity: O(1)

- **Selection Sort**: Divides the input into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region.
  - Time Complexity: Best/Average/Worst O(n²)
  - Space Complexity: O(1)

- **Merge Sort**: A divide-and-conquer algorithm that divides the input array, recursively sorts the sub-arrays, then merges them back together.
  - Time Complexity: Best/Average/Worst O(n log n)
  - Space Complexity: O(n)

- **Quick Sort**: Another divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around the pivot.
  - Time Complexity: Best/Average O(n log n), Worst O(n²)
  - Space Complexity: O(log n) average case

- **Heap Sort**: Builds a max heap from the input data, then repeatedly extracts the maximum element and rebuilds the heap.
  - Time Complexity: Best/Average/Worst O(n log n)
  - Space Complexity: O(1)

- **Radix Sort**: A non-comparative sorting algorithm that sorts data with integer keys by grouping keys by individual digits.
  - Time Complexity: Best/Average/Worst O(nk) where k is the number of digits
  - Space Complexity: O(n + k)
