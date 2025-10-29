### Snippet: `Multi-Catch Resources in Java`

This snippet introduces two crucial features for writing modern, cleaner, and safer exception handling code: the **multi-catch block** and the **try-with-resources** statement, both introduced in Java 7.

### Snippet Goal

To practice using the **multi-catch** syntax to handle multiple, non-hierarchical exceptions in a single block, and to implement **try-with-resources (Automatic Resource Management)** to eliminate verbose `finally` blocks used for resource cleanup.

### Core Concepts Explained

**1. Try-With-Resources (Automatic Resource Management)**

* **Problem Solved:** Traditionally, closing resources (like file streams, sockets, or database connections) required a verbose `finally` block with nested `try-catch` blocks to handle potential closing errors.
* **Mechanism:** The `try-with-resources` statement automatically closes any resource declared within the parentheses of the `try` block, provided that resource implements the **`java.lang.AutoCloseable`** interface.
* **Syntax:** `try (ResourceType resource = new ResourceType()) { ... }`.
* **Flow:** The `close()` method is automatically called when the `try` block finishes, whether normally or due to an exception. This makes resource management much cleaner and prevents resource leaks.

**2. Multi-Catch Block**

* **Problem Solved:** Reduces boilerplate code where multiple different exception types required the exact same handling logic (e.g., logging and gracefully exiting).
* **Mechanism:** Allows a single `catch` block to handle several exception types by separating them with a **vertical bar (`|`)**.
* **Rule:** The exceptions listed in the multi-catch block **must not** be related by inheritance (i.e., you cannot catch a superclass and a subclass in the same block).
* **Variable Type:** The variable caught by the multi-catch block is treated as the **closest common superclass** of the types listed, which is often `java.lang.Exception`.

### Syntaxed Typing Focus

This snippet tests proficiency in modern syntax features:

* **Resource Declaration:** Typing the resource declaration directly within the parentheses of the `try` block (`try (BufferedReader reader = ...)`).
* **`AutoCloseable` Implementation:** Recognizing and typing the `implements AutoCloseable` clause and the mandatory `close()` method in the custom resource class.
* **Multi-Catch Syntax:** Accurately typing the **vertical bar (`|`)** to separate multiple, distinct exception classes within the `catch` statement.