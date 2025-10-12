## Concept: Dart Functions (Definition, Parameters, and Usage)

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/language/functions](https://dart.dev/language/functions)

### Description
This snippet comprehensively illustrates how functions are defined, configured with parameters (positional, named, optional), and utilized as first-class objects in Dart. Functions are the essential building blocks for encapsulating and reusing application logic.

### Code Explanation

1. **Basic Function Definition**
   A traditional function definition specifies the **return type** and the **parameter types**. The example `fibonacci` demonstrates a standard function signature and uses **recursion** (a function calling itself) to calculate the sequence.

2. **Arrow Functions (Shorthand)**
   Dart provides a concise syntax for functions that contain only a single expression.
   * **Syntax:** `ReturnType functionName(params) => expression;`
   * The `=>` (arrow) is shorthand for writing `{ return expression; }`. This is ideal for simple, one-line calculations like `square`.

3. **Function Parameters**
   Dart offers high flexibility in defining function parameters:
   * **Optional Positional Parameters**: Parameters enclosed in **square brackets (`[]`)** are optional. If not provided by the caller, they default to `null` if nullable (`String? device`) or use a provided default value.
   * **Named Parameters**: Parameters enclosed in **curly braces (`{}`)** must be referenced by their name when the function is called, greatly improving code clarity.
     * **`required`**: This keyword ensures the caller **must** provide a value for that specific named parameter.
     * **Default Value**: Named parameters can also have default values (e.g., `age = 0`).

4. **Functions as First-Class Objects**
   In Dart, functions are objects (instances of `Function`), meaning they can be treated like any other value:
   * **Assigned to Variables**: A function can be assigned to a variable, which can then be called like a regular function (e.g., `var multiply = (int a, int b) => a * b;`).
   * **Anonymous Functions (Closures)**: A function without a name. They are commonly used when iterating over collections, such as within the `forEach` method.
   * **Functions as Parameters**: A function can be passed as an argument to another function (a higher-order function), allowing dynamic execution of logic (e.g., `executeOperation`).