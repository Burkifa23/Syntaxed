### Snippet: `Exception Propagation in Java`

This snippet demonstrates **exception propagation**, the fundamental mechanism by which an exception object travels up the **Call Stack** (the sequence of method calls) from the point it is thrown until a corresponding `catch` block handles it. It highlights the mandatory use of the **`throws` keyword** for checked exceptions.

### Snippet Goal

To practice using the **`throws` keyword** in method signatures, and to visually trace how a checked exception thrown deep within a method hierarchy propagates up to a higher-level `try-catch` block for resolution.

### Core Concepts Explained

**1. The Call Stack and Propagation**

* **Call Stack:** When a Java program runs, the JVM maintains a stack of active method calls. `main()` is usually at the bottom, and the currently executing method is at the top.
* **Propagation:** When an exception is thrown (using the `throw new` statement), the JVM searches the current method for a matching `catch` block. If none is found, the current method frame is popped off the stack, and the exception **propagates** (travels) to the calling method. This continues until a matching `catch` block is found. If it reaches `main()` and is still uncaught, the program terminates.

**2. The `throws` Keyword (The Contract)**

* **Rule:** If a method contains code that can throw a **checked exception** but does not handle it internally with a `try-catch` block, the method **must** declare that possibility in its signature using the **`throws` keyword**.
* **Syntax:** `public static void method() throws ExceptionType`.
* **Purpose:** This forces the calling method to acknowledge the potential exception and either catch it or declare it (propagate it further). It acts as a mandatory contract enforced by the compiler.

**3. Responsibility and Control**

* **Thrower:** The lowest level method (`methodLevel3`) throws the exception because it knows *why* the failure occurred.
* **Propagator:** Intermediate methods (`methodLevel2`, `methodLevel1`) use `throws` to pass the responsibility up the chain, allowing the higher-level code (the caller/client) to decide on the appropriate recovery strategy.
* **Catcher:** The highest level method (`main`) contains the `try-catch` block, which is the best place to log the error and decide on the final application response.

### Syntaxed Typing Focus

This snippet tests proficiency in signature declaration:

* **`throws` Placement:** Typing the `throws` keyword after the parameter list in the method signature, followed by the exception type.
* **Propagation Chain:** Understanding which methods in the chain require the `throws` declaration (all methods that don't catch the checked exception locally).
* **Exception Flow:** Typing the `try-catch` block at the entry point (`main`) where the execution flow is controlled.