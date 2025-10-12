## Concept: Dart Inheritance (`extends`, `super`, `@override`)

**Category: Dart OOP Fundamentals**
**Target Documentation:** [https://dart.dev/language/inheritance](https://dart.dev/language/inheritance)

### Description
Inheritance is fundamental to Object-Oriented Programming (OOP), allowing you to establish an **"is-a" relationship** between classes. By using the `extends` keyword, a subclass inherits the properties and methods of its superclass, promoting code reuse and enabling specialized behavior through method overriding.

### Code Explanation

1. **Implementing Inheritance (`extends`)**
   Dart uses **single inheritance**, meaning a class can extend only one other class. The subclass (`SmartTelevision`) gains access to all non-private members of the superclass (`Television`).

2. **Initializing the Parent (`super` Constructors)**
   When a subclass is instantiated, the superclass must be initialized first.
   * **Super Parameters:** The most concise, modern Dart approach is using **`super.parameterName`** (e.g., in `Orbiter`). This delegates the parameter directly to the matching parent constructor, reducing boilerplate.
   * **Explicit `super()`:** Used for more complex initialization logic.

3. **Method Overriding and Polymorphism**
   **Polymorphism** allows objects of different classes to respond to the same method call in different ways. In Dart, this is achieved when a subclass defines a method with the exact same name and signature as a method in its superclass.
   * **`@override` Annotation:** This annotation **must be used** to clearly indicate that the method is intentionally replacing a parent's implementation (e.g., `toString()` in `SavingAccount`). This helps the compiler verify correctness.

4. **Augmenting Behavior (`super.methodName()`)**
   In an overridden method, you often need to run the parent's base logic and then add new, specialized logic.
   * **`super.methodName()`**: This call executes the superclass implementation. The `ElectricCar`'s `drive()` method calls `super.drive()` to print the generic message and then adds its specific battery information. This ensures common setup is always performed.