## Concept: Dart Error Handling (`try`, `catch`, `throw`, Exceptions)

**Category: Dart Advanced Concepts**
**Target Documentation:** [https://dart.dev/language/error-handling](https://dart.dev/language/error-handling)

### Description
Error handling is crucial for building robust applications, especially when dealing with external factors like network connections or user input validation (e.g., handling Supabase API failures). Dart uses **exceptions** to signal errors, which should be anticipated and managed using the `try-catch` structure.

### Code Explanation

1. **Custom Exceptions (`CustomDataException`)**
   For domain-specific errors (like "Connection Failed"), it's best practice to define a **custom exception class** by either implementing or extending the base `Exception` class. This allows the calling code to specifically catch and handle your application's unique errors.

2. **Throwing Exceptions (`throw`)**
   The **`throw`** keyword is used to explicitly raise an exception, halting the normal flow of execution. Dart can throw any non-null object, but throwing an `Error` or an `Exception` object is the standard practice.

3. **`try-catch` Block**
   * **`try`**: Encloses the code that might throw an exception.
   * **`on`**: Used to catch a **specific type** of exception (e.g., `on FormatException` or `on CustomDataException`). This is the preferred method when you know the failure mode.
   * **`catch`**: Used to catch **any exception** or an exception whose type you don't know, allowing you to access the exception object (`e`) itself.
   * **`finally`**: The code within this block **always executes**, regardless of whether an exception was thrown or caught. It's typically used for cleanup logic (e.g., closing a file or resetting a loading state).

4. **Catching Specific vs. General Exceptions**
   The `try-catch` structure allows for multiple catch clauses. The rule is simple: handle **specific exceptions first** (`on CustomDataException`), then fall through to a **general catch** (`catch (e)`) for unexpected issues.