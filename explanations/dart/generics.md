## Concept: Dart Generics (Type Parameters and Constraints)

**Category: Dart Advanced Concepts**
**Target Documentation:** [https://dart.dev/language/generics](https://dart.dev/language/generics)

### Description
**Generics**, or **Parameterized Types**, allow you to define code that works with different types while still maintaining type safety. They are essential for creating reusable components (like collections, builders, or utility classes) that can operate on any data type without sacrificing compile-time checks.

### Code Explanation

1. **Generic Class Definition**
   The **`<T>`** syntax defines a **type parameter** when declaring a class or function.
   * **Example:** `class Box<T>`. Here, `T` acts as a placeholder for the actual type that will be used when the `Box` is instantiated (e.g., `Box<int>`).

2. **Using the Type Parameter (`T`)**
   Inside the `Box` class, the type parameter `T` is used as the type for the instance variable (`content`) and the function parameter (`set(T value)`). This ensures that a `Box<String>` can only store `String` values, providing strong type checking.

3. **Type Constraint (`extends`)**
   The **`extends`** keyword is used to set an **upper boundary** (a constraint) on the generic type parameter.
   * **Example:** `class Processor<T extends Comparable>`. This means `T` can be any type, but it **must** implement the `Comparable` interface. This allows the `Processor` to safely call methods defined on `Comparable` (like `compareTo()`) without knowing the exact type.
   * Attempting to instantiate `Processor<Object>` fails because `Object` does not implement `Comparable`.

4. **Generic Functions**
   Type parameters can also be used on methods and functions.
   * **Example:** `T getItem<T>(List<T> items, int index)`. The `T` here ensures the returned type matches the type of the elements in the input `List`. This is often used with utility functions to maintain type specificity.