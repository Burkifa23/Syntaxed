### Snippet: `Enum Types in Java`

This snippet introduces **enumerations** (`enum`), a special type of class in Java used to define a fixed, finite set of named constants. Enums provide type safety and allow you to associate data and behavior with each constant.

### Snippet Goal

To practice defining a simple enum, utilizing enums in modern `switch` expressions, and creating a **complex enum** with custom instance fields, a private constructor, and dedicated methods.

### Core Concepts Explained

**1. Enum as a Class**

* An enum is implicitly a subclass of **`java.lang.Enum`**.
* Enum constants (e.g., `TicketStatus.OPEN`) are actually **static final instances** of the enum type itself.

**2. Simple Enum Usage**

* **Declaration:** Declared using the `enum` keyword. The constants are listed first, separated by commas.
* **Type Safety:** Unlike basic integer constants, enums are type-safe. You cannot accidentally assign an `int` where an `enum` is expected.
* **Built-in Methods:** All enums get powerful static methods:
    * **`values()`**: Returns an array containing all the enum constants in their declaration order (used for iteration).
    * **`valueOf(String)`**: Converts a string name back into the corresponding enum constant.

**3. Complex Enums (Enums with State and Behavior)**

Enums can be much more powerful than simple constant lists:

* **Fields and Constructor:** To give each constant unique data (e.g., `ADMIN` needs a security level), you can add instance fields and a constructor. The constructor **must** be declared **`private`** or package-private; you cannot instantiate enums directly.
* **Methods:** You can define instance methods on an enum that operate on its state (e.g., `UserRole.ADMIN.getLevel()`).
* **Semicolon Rule:** If the enum body contains anything more than the list of constants (fields, constructors, or methods), the list of constants **must** be terminated with a semicolon (`;`).

**4. Enums in Switch Expressions (Java 14+ / Java 25 LTS)**

Enums work seamlessly with the modern `switch` expression syntax. This provides clear, concise, and complete branching logic. Because the compiler knows all possible enum constants, it can guarantee that all cases are covered, reducing the need for a fallback `default` case.

### Syntaxed Typing Focus

This snippet tests proficiency in advanced enum syntax:

* **Definition Structure:** Typing the standard list of constants, followed by the mandatory semicolon when fields/methods are present.
* **Constructor Access:** Understanding and typing the **`private`** constructor within the enum body.
* **Accessing Data:** Using the dot operator to call instance methods on the enum constant (e.g., `role.getLevel()`).
* **Iteration:** Typing the `for-each` loop correctly with the static `values()` method.