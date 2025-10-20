### Snippet: `Variables & Data Types`

This snippet establishes the foundation of Java's type system by demonstrating the declaration, initialization, and use of both **primitive** and **reference** data types, along with modern **local variable type inference**.

### Snippet Goal

To practice declaring variables using Java's eight primitive types, understand the difference between primitive and reference types, and apply basic explicit and implicit type casting.

### Core Concepts Explained

**1. Primitive Data Types (Value Types)**

Primitives store the actual value directly in the memory allocated for the variable. Java defines eight primitives, categorized by usage:

* **Integers:** `byte` (8-bit), `short` (16-bit), `int` (32-bit, default), `long` (64-bit, requires `L` suffix for literals).
* **Floating-Point:** `float` (32-bit, requires `f` suffix for literals), `double` (64-bit, default).
* **Other:** `char` (16-bit Unicode character), `boolean` (stores `true` or `false`).

**2. Reference Data Types (Object Types)**

Reference types (like **`String`** or **`List`**) do not store the value directly. Instead, they store a **reference** (memory address) to an object allocated on the heap.

* All reference types inherit from the `java.lang.Object` class.
* They are initialized to **`null`** by default (if they are instance variables).

**3. Type Casting (Conversion)**

* **Widening (Implicit) Conversion:** Moving from a smaller type to a larger type (e.g., `int` to `double`). This is safe and automatic because no data is lost.
* **Narrowing (Explicit) Conversion:** Moving from a larger type to a smaller type (e.g., `double` to `int`). This **requires an explicit cast** `(int) value` and can result in loss of precision or magnitude.

**4. Local Variable Type Inference (`var`)**

Introduced in Java 10, the **`var`** keyword can be used to declare local variables where the compiler can *infer* the type from the initializer expression.

* This is a convenience to reduce boilerplate, but Java remains a **statically-typed** language; the type is fixed at compile time.
* It can **only** be used for local variables within a method.

### Syntaxed Typing Focus

This snippet focuses on accurate typing and literal usage:

* **Primitive Suffixes:** Correctly using the `L` suffix for `long` literals and the `f` suffix for `float` literals, which are mandatory to prevent compilation errors.
* **Casting Syntax:** Practicing the explicit casting syntax `(type) variable` for narrowing conversions.
* **Inference (`var`):** Using the modern `var` keyword in a method scope to infer types.