## Concept: Arithmetic and Assignment Operators

**Category: Dart Basics**
**Target Documentation:** [dart.dev/language/operators](https://dart.dev/language/operators)

### Description
This snippet demonstrates the fundamental operators used for performing mathematical calculations and modifying the values of variables in Dart. Understanding these operators is the basis for all numerical logic within an application.

### Code Explanation

1. **Arithmetic Operators**
   These operators perform basic mathematical calculations:
   * **`+`, `-`, `*`**: Standard addition, subtraction, and multiplication.
   * **`/`**: Performs division and always results in a `double` (a floating-point number), even if the result is a whole number.
   * **`%`**: The modulus operator, which returns the remainder of an integer division.
   * **`~/`**: The **integer division** operator. It divides the numbers and returns the integer part of the result, discarding any fractional remainder.

2. **Assignment Operators**
   These operators provide a shorthand for performing an operation and assigning the result back to the same variable.
   * **`+=`**: Equivalent to `counter = counter + 5`.
   * **`*=`**: Equivalent to `counter = counter * 2`.
   * Dart supports similar shorthands for subtraction (`-=`), division (`/=`), and others.

3. **Increment and Decrement Operators**
   These are used to increase or decrease a numerical value by exactly one.
   * **`i++`**: The **post-increment** operator. It uses the current value of `i` in the expression, and *then* increments `i`.
   * **`j--`**: The **post-decrement** operator. It uses the current value of `j` in the expression, and *then* decrements `j`. (Dart also supports pre-increment/decrement, e.g., `++i`.)