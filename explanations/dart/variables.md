## Concept: Dart Variable Declarations (`var`, Explicit Types, Nullable)
**Category: Dart Basics**
**Target Documentation:** [dart.dev/language/variables](https://dart.dev/language/variables)

### Description
This snippet showcases Dart's flexible and safe approach to variables and types. It covers `var` (for type inference), explicit type annotations (`String`, `int`), mutability, the generic `Object` type, and the fundamental concept of null safety.

### Code Explanation

1. **Type Inference (`var`)**
   The `var` keyword is used for variables where the type is automatically inferred by the compiler from the initial value.
   * **Example:** `var name = 'Bob';` $\to$ Dart infers `name` is a `String`.
   * **Benefit:** Promotes cleaner code while maintaining static type safety (e.g., `name` cannot later be assigned a number).

2. **Explicit Type Annotation**
   This is the traditional way to declare a variable, clearly stating the type before the variable name (`String`, `int`, `double`).
   * **Benefit:** Improves documentation and clarity, especially for function parameters and public API signatures.

3. **Mutability and Reassignment**
   By default, variables are mutable, meaning their values can be changed after initialization, provided the new value matches the variable's type.

4. **The `Object` Type**
   The `Object` type is the root of the entire Dart type system. A variable declared as `Object` can hold any object type, allowing it to change types dynamically (though this sacrifices some compile-time safety).

5. **Null Safety (`?`)**
   This key modern feature prevents runtime errors caused by accessing members on a `null` object.
   * **Example:** `int? nullableNumber;`
   * The `?` suffix explicitly declares a variable as **nullable**, meaning it can legally hold `null`. An uninitialized nullable variable defaults to `null`.