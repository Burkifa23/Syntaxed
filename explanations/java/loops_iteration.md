### Snippet: `loops-iteration.java`

This snippet covers Java's primary iteration constructs, which allow a block of code to be executed repeatedly. Mastering these loops is essential for processing collections, performing calculations, and managing application flow.

### Snippet Goal

To practice writing the traditional `for` loop, the `while` loop, the guaranteed-execution `do-while` loop, and the concise `for-each` loop, along with using the `break` and `continue` keywords for granular control.

### Core Concepts Explained

**1. The `for` Loop (Counter-Controlled Iteration)**

The `for` loop is ideal when the number of iterations is known ahead of time. Its structure requires three parts, separated by semicolons:

* **Initialization:** Executed once at the start (e.g., `int i = 0`).
* **Condition:** Checked before every iteration; the loop runs as long as this is `true` (e.g., `i < 10`).
* **Update (Increment/Decrement):** Executed after every iteration (e.g., `i++`).

**2. The Enhanced `for-each` Loop (Data-Controlled Iteration)**

The `for-each` loop is designed for iterating over the elements of arrays or objects implementing the `Iterable` interface (like Collections).

* **Syntax:** `for (Type element : iterable_or_array)`.
* **Benefit:** It is simpler, less error-prone (no off-by-one index errors), and generally preferred when you only need to access the element's value, not its index.

**3. The `while` Loop (Condition-Controlled Iteration)**

The `while` loop executes a block of code repeatedly as long as its conditional expression remains `true`.

* **Use Case:** Best when the number of iterations is unknown and depends on runtime conditions (e.g., reading data until the end of a file is reached).
* **Caution:** It is critical to ensure the loop body eventually changes the condition to `false` to avoid an infinite loop.

**4. The `do-while` Loop**

Similar to the `while` loop, but the condition is checked *after* the loop body is executed.

* **Guaranteed Execution:** This guarantees the loop body will execute **at least once**, even if the condition is initially `false`.

**5. Loop Control Keywords**

* **`continue`**: Immediately stops the current iteration of the loop and skips directly to the update expression (or condition check), proceeding to the next iteration.
* **`break`**: Immediately terminates the entire loop, transferring control to the statement immediately following the loop body.

### Syntaxed Typing Focus

This snippet focuses on accurate loop syntax and structure:

* **`for` Loop Structure:** Typing the three mandatory semicolon-separated parts of the classic `for` loop.
* **`for-each` Colon Syntax:** Correctly using the colon (`:`) syntax for iterating over collections.
* **Control Keywords:** Practicing the proper placement and use of `break` and `continue` within conditional blocks.