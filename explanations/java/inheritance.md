### Snippet: `Inheritance Basics in Java`

This snippet introduces **inheritance**, a cornerstone of Object-Oriented Programming (OOP) that allows a new class (subclass/child) to acquire the properties and behaviors of an existing class (superclass/parent).

### Snippet Goal

To practice using the **`extends` keyword** to establish an "is-a" relationship, invoke the superclass constructor using **`super()`**, and demonstrate **method overriding**.

### Core Concepts Explained

**1. The `extends` Keyword ("Is-A" Relationship)**

* Inheritance is achieved using the **`extends`** keyword in the subclass declaration (e.g., `class ElectricCar extends Car`).
* This establishes an "is-a" relationship (an `ElectricCar` **is a** `Car`).
* The subclass automatically inherits all non-private fields and methods from the superclass.

**2. The `super()` Constructor Call**

* When an object of the subclass is created, the JVM must first initialize the superclass part of that object.
* The subclass constructor **must** call one of the superclass constructors using the **`super()`** keyword.
* **Rule:** The `super(...)` call must be the **very first statement** in the subclass constructor body, similar to constructor chaining with `this(...)`. If the superclass has a default, no-argument constructor, the compiler inserts an implicit `super()` call for you.

**3. Method Overriding**

* **Definition:** Method overriding occurs when a subclass defines a method with the exact same name, return type, and parameter list as a method in its superclass.
* **Purpose:** This allows the subclass to provide its own specific implementation for a behavior inherited from its parent. The subclass implementation is what runs when the method is called on a subclass object.
* **`@Override` Annotation:** Although not mandatory for compilation, using the `@Override` annotation is highly recommended. It tells the compiler to check that the method signature is indeed overriding a superclass method, preventing subtle bugs.

### Syntaxed Typing Focus

This snippet tests proficiency with inheritance syntax:

* **Extending Syntax:** Accurately typing the `extends` keyword in the class definition.
* **Mandatory Constructor Call:** Correctly typing the **`super()`** call as the first line of the constructor.
* **Annotation Practice:** Typing the **`@Override`** annotation to signal an intentional override of an inherited method.