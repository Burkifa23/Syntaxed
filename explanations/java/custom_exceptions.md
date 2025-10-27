### Snippet: `Custom Exceptions in Java`

This snippet teaches the creation of **custom exception classes**, allowing developers to define domain-specific errors that clearly communicate what went wrong in an application. This is key to writing clean and maintainable error handling logic.

### Snippet Goal

To practice creating two types of custom exceptions: a **checked exception** (by extending `Exception`) that forces the caller to handle the error, and an **unchecked exception** (by extending `RuntimeException`) used for logic errors or failures that can occur anywhere.

### Core Concepts Explained

**1. Creating a Custom Checked Exception**

* **Inheritance:** The custom class **must extend `java.lang.Exception`**.
* **Enforcement:** By extending `Exception`, the compiler enforces that any method capable of throwing this exception **must** declare it using the **`throws`** keyword (`throws InvalidIdException`) and that the calling code **must** wrap the call in a `try-catch` block.
* **Use Case:** Checked exceptions are typically used for anticipated, external problems that the application can recover from (e.g., file not found, network timeout, invalid user input that must be retried).

**2. Creating a Custom Unchecked Exception**

* **Inheritance:** The custom class **must extend `java.lang.RuntimeException`**.
* **Enforcement:** The compiler **does not** force the caller to handle this type. If thrown and not caught, the application will terminate.
* **Use Case:** Unchecked exceptions are used for unanticipated *programming flaws* or logic errors (e.g., passing a negative amount, illegal state, null pointer) that often cannot be recovered from gracefully.

**3. Standard Constructor**

All custom exceptions should include a standard constructor that accepts a `String` message and passes it to the `super()` constructor. This ensures the exception object correctly stores and exposes the error details via the `getMessage()` method.

**4. Throwing the Exception**

* The **`throw`** keyword is used inside the method body to signal an exceptional event and create a new instance of the exception class (`throw new InvalidIdException(...)`). This immediately halts normal execution and begins the exception propagation chain.

### Syntaxed Typing Focus

This snippet tests proficiency in exception class design and throwing syntax:

* **Inheritance Typing:** Accurately typing the `extends Exception` and `extends RuntimeException` clauses to define the type of exception.
* **`throws` Declaration:** Typing the **`throws`** keyword in the method signature to correctly declare a checked exception.
* **`throw new`:** Typing the syntax for creating and throwing a new exception instance.