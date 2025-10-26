### Snippet: `Exception Basics in Java`

This snippet introduces the core mechanism for handling abnormal conditions during program execution: **exceptions**. It demonstrates the fundamental **`try-catch-finally`** block structure and differentiates between **checked** and **unchecked** exceptions.

### Snippet Goal

To practice writing the mandatory `try-catch-finally` block for error isolation, correctly handling a runtime (unchecked) exception, and demonstrating the required handling for a compile-time (checked) exception.

### Core Concepts Explained

**1. Exception Hierarchy**

All exceptions in Java are objects that inherit from the `java.lang.Throwable` class. There are two main categories relevant to handling:

* **Checked Exceptions:** Inherit from `Exception` (excluding `RuntimeException`). These are typically external issues (I/O, SQL, interrupted thread) that the calling code **must** explicitly anticipate and handle using a `try-catch` block or declare with the `throws` clause. The compiler enforces this handling. (`IOException` is an example).
* **Unchecked Exceptions:** Inherit from `RuntimeException`. These are usually programming bugs (null pointer access, division by zero, invalid array index) that indicate a failure in the application's logic. They **do not** need to be explicitly caught, but can be, usually to provide a graceful shutdown or log the error. (`ArithmeticException` is an example).

**2. The `try-catch-finally` Structure**

* **`try` Block:** Contains the code that is expected to potentially throw an exception.
* **`catch` Block:** Executed if and only if an exception of the specified type (or a subclass of it) is thrown within the preceding `try` block. It contains the recovery or reporting logic.
* **`finally` Block:** Executed **always**, regardless of whether an exception occurred, was caught, or was left unhandled. Its primary purpose is to ensure **resource cleanup** (e.g., closing files, database connections, or network sockets).

### Syntaxed Typing Focus

This snippet tests proficiency in crucial error handling syntax:

* **Block Sequencing:** Accurately typing the `try`, `catch`, and `finally` keywords in the correct order.
* **Exception Class Typing:** Correctly typing the fully qualified exception class names (`ArithmeticException`, `IOException`) within the `catch` parentheses.
* **Variable Scope:** Understanding that the `finally` block must be designed to safely check for resources (like `reader != null`) that may have failed initialization inside the `try` block.