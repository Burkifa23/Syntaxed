## Concept: Dart Control Flow (Conditionals and Loops)

**Category: Dart Basics**
**Target Documentation:**
* [https://dart.dev/language/branches](https://dart.dev/language/branches)
* [https://dart.dev/language/loops](https://dart.dev/language/loops)

### Description
This snippet demonstrates how Dart controls the execution order of statements using two fundamental methods: **branching** (if/else, switch) and **looping** (for, while, do-while). This logic is essential for all applications, as it dictates what code runs and how often.

### Code Explanation

1. **Conditional Branching (`if`/`else`)**
   The `if`, `else if`, and `else` statements execute different blocks of code based on whether a specified condition is `true`. Dart checks conditions sequentially and executes the block associated with the first `true` condition found.

2. **Looping Statements**
   These are used for repetitive tasks:
   * **`for` Loop (Traditional)**: Used when the number of iterations is typically known or fixed by a counter.
   * **`for-in` Loop**: The preferred way to iterate over every element in a **collection** (like a `List` or `Set`).
   * **`while` Loop**: Executes a block of code repeatedly **as long as** the condition remains `true`. The condition is checked *before* the loop body runs.
   * **`do-while` Loop**: Executes the code block **at least once**, and then checks the condition at the end of the loop to determine if it should continue.

3. **Loop Control Keywords**
   * **`break`**: Immediately terminates the innermost loop and skips to the code following the loop.
   * **`continue`**: Skips the rest of the current iteration's code block and jumps directly to the next iteration of the loop.

4. **Switch Statements and Expressions**
   * **`switch` Statement (Traditional)**: Used for control flow and performing actions (side-effects). Requires a `break` to prevent fall-through between cases.
   * **`switch` Expression (Modern Dart 3.0+)**: A more compact syntax that **returns a value**. It uses the arrow (`=>`) for each case, does not require `break`, and must be exhaustive (cover all possibilities, often using the wildcard `_` for a default case).