## Concept: Dart Mixins for Code Reuse

**Category: Dart OOP Fundamentals**
**Target Documentation:** [https://dart.dev/language/mixins](https://dart.dev/language/mixins)

### Description
Mixins provide a powerful mechanism for **code reuse** that allows a class to borrow properties and methods from other classes without using traditional inheritance. They are used to inject shared functionality (like logging, state management logic, or database utilities) into diverse, often unrelated, classes.

### Code Explanation

1. **Basic Mixin Definition and Usage**
   * **Definition:** A mixin is declared using the **`mixin`** keyword.
   * **Usage:** A class uses a mixin by listing it after the **`with`** keyword (e.g., `class Performer with Musical`). The consuming class immediately gains all its members.

2. **Ordering of Multiple Mixins**
   A class can use multiple mixins separated by commas (e.g., `class Maestro with Musical, Aggressive, Demented`). **Order matters:** if multiple mixins define the same method, the one listed **rightmost** takes precedence (known as "rightmost wins").

3. **Mixins with Abstract Methods**
   A mixin can declare an **abstract method** (a method without a body). This creates a contract: any class that uses the mixin is **forced to implement** that method. This allows the mixin to provide general logic while delegating a specific part of that logic to the consuming class (e.g., `Musician` forces the implementation of `playInstrument`).

4. **Superclass Constraints (`on` Keyword)**
   The **`on` keyword** restricts which classes can use a specific mixin.
   * **Mechanism:** `mixin Carnivore on Animal` means `Carnivore` can only be applied to classes that extend `Animal` (or are `Animal`).
   * **Benefit:** This constraint allows the mixin (e.g., `Carnivore`) to confidently call methods from the required parent class (e.g., `eat()` from `Animal`) inside its own logic, ensuring safety.

5. **Mixin Classes (Modern Dart)**
   The **`mixin class`** syntax defines a single entity that can be used both as a traditional superclass (extended with `extends`) and as a mixin (applied with `with`). This simplifies class design when flexibility is needed.