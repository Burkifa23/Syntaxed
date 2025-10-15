## Concept: Dart Records and Patterns (Dart 3.0+)

**Category: Dart Advanced Concepts**
**Target Documentation:**
* [https://dart.dev/language/records](https://dart.dev/language/records)
* [https://dart.dev/language/patterns](https://dart.dev/language/patterns)

### Description
**Records and Patterns** are Dart 3.0 features that significantly simplify how data is handled. **Records** allow functions to return multiple, typed values efficiently, and **Patterns** allow you to analyze and deconstruct (break down) those data structures for cleaner variable assignment and control flow logic.

### Code Explanation

1. **Records (Multiple Return Values)**
   A **Record** is a fixed-size, anonymous, and immutable data structure. It's the modern way to return multiple values from a function without creating a dedicated class (struct) for every case.
   * **Positional Records:** `(String name, int age)` are accessed by position during destructuring.
   * **Named Records:** `({double latitude, double longitude})` are clearer and accessed by name (e.g., `latitude`).

2. **Destructuring with Patterns**
   **Patterns** are syntactic structures that let you break down complex objects and assign parts of them to new local variables.
   * **Positional Pattern (`final (name, age) = getProfile()`)**: Deconstructs an unnamed Record, assigning values based on their position.
   * **Named Pattern (`final (:latitude, :longitude) = getLocation()`)**: Deconstructs a named Record, assigning values based on their keys.
   * **Object Pattern (`Square(side: var s)`)**: Checks the type of an object (`Square`) and simultaneously extracts its properties (`side`) into a local variable (`s`).

3. **Patterns in Control Flow**
   Patterns greatly enhance control flow structures like `if-case` and `switch` expressions.
   * **`if-case`**: Checks if a value matches a specific pattern (type, structure, or value). If it matches, the variables defined in the pattern are assigned. The example uses a **List Pattern** to check the type and deconstruct a list.
   * **`switch` Expression**: Used for handling multiple outcomes. It employs **Object Patterns** to match data structure and type, and then returns a value based on the successful match. It can also use **Guard Clauses** (`when r > 10.0`) to add extra conditions to the pattern match. The wildcard (`_`) acts as the exhaustive default case.