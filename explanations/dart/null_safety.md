## Concept: Dart Sound Null Safety

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/null-safety/understanding-null-safety](https://dart.dev/null-safety/understanding-null-safety)

### Description
This snippet demonstrates Dart's Sound Null Safety, a feature designed to eliminate a common class of runtime errors (null reference errors). In modern Dart, all types are **non-nullable by default**, meaning they cannot hold `null` unless explicitly marked.

### Code Explanation

1. **Non-Nullable vs. Nullable Types**
   * **Non-Nullable:** Variables declared without a `?` (e.g., `int age`) cannot be assigned `null`. This is checked at compile time, preventing bugs.
   * **Nullable (`?`):** Adding a question mark (`?`) makes a type nullable (e.g., `int? nullableAge`), explicitly allowing it to hold either a value or `null`. Uninitialized nullable variables default to `null`.

2. **Null-Aware Operators (Safe Handling)**
   Dart provides special operators for working with nullable types safely:
   * **Safe Navigation (`?.`)**: Safely calls a method or accesses a property only if the object isn't `null`. If the object is `null`, the expression returns `null` instead of crashing.
   * **Null-Coalescing (`??`)**: Provides a **default value** to use if the expression on the left is `null`. It acts as a concise way to handle missing data.
   * **Null-Aware Assignment (`??=`)**: Assigns a value to a variable **only if** the variable is currently `null`.

3. **Null Assertion (`!`)**
   This is the "I promise it's not null" operator. It tells the compiler to treat a nullable type as non-nullable. **Use with caution:** If the value is actually `null` when this runs, your app will crash with a runtime error. It should only be used when you are absolutely certain the value has been initialized or checked immediately prior.