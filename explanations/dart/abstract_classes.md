## Concept: Dart Abstract Classes and Methods

**Category: Dart OOP Fundamentals**
**Target Documentation:** [https://dart.dev/language/abstract-classes](https://dart.dev/language/abstract-classes)

### Description
**Abstract classes** are used to define a common interface and shared behavior for a group of related classes without allowing direct instantiation. They are essential for creating design contracts where certain methods **must** be implemented by any concrete subclass.

### Code Explanation

1. **Abstract Class Definition (`abstract class Shape`)**
   * The **`abstract`** keyword prevents the class (`Shape`) from being instantiated directly (you cannot do `var s = Shape()`).
   * Abstract classes serve purely as blueprints or base types.

2. **Abstract Methods (`double calculateArea()`)**
   * An **abstract method** is one defined without an implementation body (no curly braces `{}`).
   * **Crucial Rule:** Any non-abstract class that extends an abstract class **must** provide a concrete implementation (an **`@override`**) for all inherited abstract methods. This forces every `Shape` to have an `calculateArea` logic.

3. **Concrete Methods in Abstract Classes (`void draw()`)**
   * Abstract classes can contain concrete methods (methods with a body). These methods provide reusable default behavior that all subclasses inherit directly. Subclasses can optionally override this behavior, as shown in the `Circle` class.

4. **Subclassing and Instantiation**
   * Subclasses (`Circle`, `Rectangle`) are **concrete** because they implement the missing abstract methods. These are the classes that can be instantiated and used in your application.

5. **Polymorphism**
   Abstract classes are often used as the type definition for collections (e.g., `List<Shape>`). This allows the collection to hold objects of various concrete types (`Circle`, `Rectangle`) while only exposing the generic interface defined by the abstract parent.