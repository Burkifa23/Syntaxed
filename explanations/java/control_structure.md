### Snippet: `Control Structures`

This snippet focuses on control flow, allowing a program to make decisions and execute different blocks of code based on specific conditions. This is essential for implementing logic and rules in an application.

### Snippet Goal

To practice writing conditional statements using `if-else-if`, the traditional `switch` statement, and the modern `switch` expression, and to combine conditions using complex boolean expressions.

### Core Concepts Explained

**1. The `if-else-if` Chain**

* **`if`:** Executes a block of code only if the condition in parentheses evaluates to **`true`**.
* **`else if`:** Checked only if the preceding `if` and `else if` conditions were `false`.
* **`else`:** Executes a block of code if *all* preceding `if` and `else if` conditions are `false`.
* **Flow:** Execution stops as soon as the first `true` condition is met, preventing subsequent conditions from being checked.

**2. The `switch` Statement (Traditional)**

The traditional `switch` statement is an alternative to long `if-else-if` chains when testing a single variable against multiple discrete values (like integers, enums, or Strings).

* **`break` Keyword:** The `break` keyword is crucial in the traditional format to exit the `switch` block after a case is matched. Without `break`, execution "falls through" to the next `case`.

**3. The `switch` Expression (Java 14+ / Java 25 LTS)**

The `switch` expression provides a cleaner, more concise syntax that can **return a value** and does not suffer from fall-through issues, simplifying conditional assignments.

* **Arrow Syntax (`->`):** Uses `case X -> value` or `case X -> { block; yield value; }`. The arrow implicitly handles the `break`.
* **Comma-Separated Cases:** Multiple values can be matched to a single block (`case "Apple", "Strawberry"`).
* **`yield` Keyword:** Used when a case requires a block of code (using curly braces `{}`) but still needs to return a single value to the outer expression.

**4. Conditional Logic**

* Conditional statements rely on **boolean expressions** (expressions that evaluate to `true` or `false`).
* Complex conditions are built using logical operators (`&&` AND, `||` OR, `!` NOT), often grouped by parentheses to enforce precedence.

### Syntaxed Typing Focus

This snippet focuses on accurate control flow syntax:

* **Keyword Groups:** Typing the correct sequences of `if`, `else if`, and `else`.
* **`switch` Syntax:** Practicing both the traditional colon/break structure and the modern arrow/expression structure, which requires careful placement of the `default` case and the `yield` keyword.
* **Boolean Logic:** Correctly using parentheses to group sub-expressions in complex conditional logic.