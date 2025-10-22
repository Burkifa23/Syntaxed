### Snippet: `abstract-classes.java`

This snippet introduces the concept of **abstraction** in Java through the use of **abstract classes** and **abstract methods**. This allows you to define common interfaces and partially implemented logic for a group of related classes.

### Snippet Goal

To practice declaring an abstract class using the `abstract` keyword, defining an abstract method (a method signature without a body), and enforcing that a concrete (non-abstract) subclass **must** provide implementation for all inherited abstract methods.

### Core Concepts Explained

**1. Abstract Class**

* **Definition:** A class declared with the **`abstract`** keyword. An abstract class cannot be instantiated directly with the `new` keyword.
* **Purpose:** It serves as a base class or template, providing a foundation of common code, fields, and constructors that its subclasses can inherit.
* **Composition:** Abstract classes can contain both **abstract methods** and **concrete methods** (methods with bodies).

**2. Abstract Method**

* **Definition:** A method declared with the **`abstract`** keyword and terminated with a semicolon, having **no method body**.
* **Purpose:** It defines a contract: it tells all non-abstract subclasses that they **must** implement this method. It ensures that a crucial, yet type-specific, behavior exists.

**3. Concrete Subclass (Implementation)**

* Any class that extends an abstract class but is *not* declared abstract itself is called a **concrete class**.
* **Rule:** A concrete subclass **must** override and implement all inherited abstract methods from the superclass. If it fails to do so, the subclass itself must also be declared `abstract`.

**4. Instantiation Rule**

While you cannot create an object of the abstract class itself (`new Shape()`), you **can** use the abstract class type as a **polymorphic reference** to hold an instance of its concrete subclass (`Shape myCircle = new Circle();`).

### Syntaxed Typing Focus

This snippet focuses on accurate use of the `abstract` keyword:

* **Class Declaration:** Typing `public abstract class` to correctly define the base template.
* **Method Signature:** Typing the method signature ending with the required semicolon (`;`) and the `abstract` keyword, specifically omitting the curly braces (`{}`).
* **Implementation Enforcement:** Practicing the required `@Override` annotation when providing the concrete method body in the subclass, ensuring all abstract methods are handled.