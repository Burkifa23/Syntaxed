## Concept: Dart Basic Data Types

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/language/built-in-types](https://dart.dev/language/built-in-types)

### Description
This snippet covers the core built-in data types in Dart—`int`, `double`, `num`, `String`, and `bool`—which are essential for storing and manipulating data in any application. It also demonstrates how to perform essential type conversions.

### Code Explanation

1. **Numbers (`int`, `double`, `num`)**
   Dart has two main number types, both inheriting from `num`.
   * **`int`**: Represents whole numbers (integers), including negative numbers.
   * **`double`**: Represents floating-point numbers (numbers with a decimal point).
   * **`num`**: A flexible supertype that can hold either an `int` or a `double` value. This is useful when a variable needs to store either integer or fractional data.

2. **Strings (Text Data)**
   Strings are sequences of characters used for text data.
   * **Declaration:** Use single (`'`) or double (`"`) quotes.
   * **Multi-line Strings:** Use triple quotes (`'''` or `"""`) to create strings that span multiple lines without needing escape characters.
   * **String Interpolation:** A powerful way to embed variable values or the results of expressions directly within a string using the `$` symbol. Use `${expression}` for calculations or complex expressions.

3. **Booleans (`bool`)**
   Booleans represent logical truth values. They can only be either `true` or `false`. They are essential for conditional logic and flow control (e.g., `if` statements).

4. **Type Conversions (Parsing and Stringifying)**
   Dart is strongly typed, meaning you must explicitly convert data between types when necessary. This is especially common when processing external data (like user input or JSON).
   * **String to Number:** Use the `.parse()` method on the target type (e.g., `int.parse('42')`). **Note:** In production code, it is safer to use `tryParse()` to handle invalid input gracefully.
   * **Number to String:** Use the `.toString()` method. For controlling decimal places in a `double`, use `.toStringAsFixed(decimals)`.