### Snippet: `Classes and Objects in Java`

This snippet introduces the core building blocks of Java's object-oriented paradigm: **classes** (the blueprint) and **objects** (the instance). It demonstrates defining state using instance variables and behavior using methods.

### Snippet Goal

To practice defining a class, creating multiple objects (instances) from that class using the `new` keyword, setting instance variables, and calling instance methods to observe object-specific behavior.

### Core Concepts Explained

**1. Class Definition (The Blueprint)**

* A **class** is a template or blueprint for creating objects. It defines the structure (fields/variables) and behavior (methods) that all objects of that type will possess.
* The class definition uses the keyword `class` followed by the class name (e.g., `Car`).

**2. Objects (The Instance)**

* An **object** is a concrete instance of a class. It represents a real-world entity defined by the class template.
* Objects are created at runtime using the **`new` keyword**, which allocates memory on the heap for the object.

**3. Instance Variables (State)**

* These are variables declared *inside* the class but *outside* any method.
* They define the **state** or attributes of an object (e.g., `make`, `model`, `speed`).
* Each object created from the class gets its own unique copy of the instance variables.

**4. Instance Methods (Behavior)**

* These are methods defined *inside* the class that operate on the object's instance variables.
* They define the **behavior** or actions an object can perform (e.g., `accelerate()`, `getSpeed()`).
* They are called using the object reference (e.g., `myCar.accelerate()`).

**5. The `new` Keyword and Constructor**

* The `new` keyword is used to **instantiate** an object.
* `new Car()` calls the class's **constructor** (an initialization method that runs when the object is created). Since we did not define one, Java implicitly provides a default, no-argument constructor.

### Syntaxed Typing Focus

This snippet tests proficiency in object creation syntax:

* **Class Declaration:** Typing the class structure and declaring instance variables.
* **Instantiation:** Typing the essential pattern `ClassName objectName = new ClassName();`.
* **Dot Operator:** Using the dot operator (`.`) to access instance variables and methods through the object reference (e.g., `myCar.accelerate()`).