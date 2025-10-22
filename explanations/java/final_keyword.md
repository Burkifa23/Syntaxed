### Snippet: `Final Keyword in Java`

This snippet focuses on the **`final`** keyword, a non-access modifier used to enforce immutability or prevent modification. It is applied to fields, local variables, methods, and classes, with different effects in each context.

### Snippet Goal

To practice using **`final`** to create runtime constants, define fields that are initialized in the constructor (blank finals), prevent method overriding, and prevent a class from being inherited.

### Core Concepts Explained

**1. `final` Fields (Variables)**

When applied to a field (instance variable):

* **Constants:** The field must be initialized exactly once. Its value can never be changed after initialization. Java convention dictates that static final constants are named in **`ALL_CAPS_WITH_UNDERSCORES`**.
* **Blank Final:** A `final` instance variable that is *not* initialized at the declaration site. It **must** be initialized within every constructor of the class. This allows the constant value to be set per-object at the time of creation, but never changed afterward.

**2. `final` Local Variables**

When applied to a local variable inside a method, the variable reference **cannot be reassigned**.

* **Primitives:** If the variable is a primitive (`int`, `double`), the value is fixed.
* **References:** If the variable is an object reference (`Configuration`), the reference itself is fixed (it cannot point to a different object). However, the **state of the object it points to can still be modified** (unless the referenced object itself is designed to be immutable, like `String`).

**3. `final` Methods**

When applied to a method, the method **cannot be overridden** by any subclass.

* **Purpose:** Ensures that critical logic (e.g., a security check or a key business rule) in the superclass remains consistent and cannot be altered by derived classes.

**4. `final` Classes**

When applied to a class, the class **cannot be extended** (inherited) by any other class.

* **Purpose:** This prevents abuse of inheritance and is commonly used for security (e.g., the `String` class is final) or to define immutable utility classes.

### Syntaxed Typing Focus

This snippet tests proficiency in applying `final` across different contexts:

* **Initialization Rules:** Understanding and typing the two ways to initialize `final` fields (at declaration vs. in the constructor).
* **Reference vs. Value:** Typing the code that demonstrates that a `final` *reference* still allows the *object's state* to change.
* **Keyword Placement:** Correctly typing `final` before `class`, `void`, and the data type.