## Concept: Dart Classes (Properties, Methods, Getters/Setters)

**Category: Dart OOP Fundamentals**
**Target Documentation:** [https://dart.dev/language/classes](https://dart.dev/language/classes)

### Description
This snippet provides a comprehensive overview of class and object-oriented programming fundamentals in Dart. Classes act as blueprints for objects, defining their properties (instance variables) and behavior (methods), which is essential for structuring data models and application logic.

### Code Explanation

1. **Basic Class Definition and Properties**
   Classes define **instance variables** (properties). In the `Point` example, properties can be nullable (`double? x`), or non-nullable with a default value (`double z = 0`).

2. **Constructors (Creating Objects)**
   Constructors are special methods used to create and initialize class instances.
   * **Generative Constructor (Shorthand):** Dart offers a concise way to initialize instance variables directly in the parameter list using `this.` (`Spacecraft(this.name, this.launchDate)`).
   * **Named Constructor:** Allows for multiple, clearly named ways to create an object (e.g., `Spacecraft.unlaunched`). The `: this(name, null)` syntax redirects the call to the default constructor.

3. **Methods and Getters/Setters**
   * **Instance Method:** A function defined within a class that operates on the instance's data (e.g., `distanceTo` in `PointWithMethods`).
   * **Getters:** Provide a **calculated value** for a property without storing it as a variable. They are accessed like properties, not methods (e.g., `rect.right`).
   * **Setters:** Allows for **controlled assignment** to a property, often used to validate input or update other related properties (e.g., setting `rect.right` automatically updates `rect.left`).

4. **Static Members**
   Static members belong to the **class itself**, not to any specific instance.
   * **Static Methods:** Methods called directly on the class name (e.g., `PointStatic.distanceBetween(a, b)`). They are useful for utility functions that don't need access to instance data.