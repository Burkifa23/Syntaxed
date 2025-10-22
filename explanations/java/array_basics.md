### Snippet: `Arrays Basics in Java`

This snippet introduces **arrays**, the basic, fixed-size, sequential collection structure in Java. It covers declaration, initialization, indexing, and the use of multi-dimensional arrays, which are essential for storing structured data efficiently.

### Snippet Goal

To practice declaring and initializing one-dimensional and multi-dimensional arrays, accessing elements using zero-based indexing, and using the built-in `.length` property.

### Core Concepts Explained

**1. Array Definition and Fixed Size**

* **Homogeneous:** An array can only store elements of a **single, specified data type** (e.g., all `int` or all `String`).
* **Fixed Size:** Once an array is created, its size (the number of elements it can hold) **cannot be changed**.
* **Declaration:** An array is declared using square brackets (`[]`). The brackets can be placed after the type (`int[] numbers;`) or after the variable name (`int numbers[];`).

**2. Initialization**

Arrays can be initialized in two primary ways:

* **Declaration and Allocation:** You declare the size explicitly using the `new` keyword (`String[] names = new String[5];`). All numeric elements are initialized to `0`, booleans to `false`, and reference types (like `String`) to **`null`**.
* **Literal Initialization:** You provide initial values directly (`int[] data = {1, 2, 3};`). The size is implicitly set by the number of values provided.

**3. Zero-Based Indexing and `.length`**

* **Indexing:** Array elements are accessed using a **zero-based index**. The first element is at index `0`, and the last element is at index `array.length - 1`.
* **`ArrayIndexOutOfBoundsException`:** Accessing an index that does not exist will throw this runtime exception.
* **`.length` Property:** Every array instance has a final public field named `.length`, which returns the size of the array. *Note that `.length` is a field, not a method, so no parentheses are used.*

**4. Multi-Dimensional Arrays (Arrays of Arrays)**

A multi-dimensional array is an array whose elements are themselves arrays. They are typically used to represent grids, tables, or matrices.

* **Declaration:** Requires two sets of square brackets (`int[][] grid;`).
* **Jagged Arrays:** In Java, multi-dimensional arrays don't have to be perfectly rectangular. You can allocate a different length for each inner array, resulting in a "jagged array."

### Syntaxed Typing Focus

This snippet tests proficiency in array-specific syntax:

* **Bracket Placement:** Correctly typing the array brackets (`[]`) in declarations and accessors.
* **Initialization Keyword:** Typing the `new` keyword followed by the data type and size for explicit memory allocation.
* **Access Syntax:** Typing the index within the square brackets (`[index]`) for read and write operations.
* **Property Access:** Accurately typing the `.length` property without parentheses.

With **`arrays-basics.java`** complete, you have finished all eight snippets in the **Java Fundamentals & Syntax** section!