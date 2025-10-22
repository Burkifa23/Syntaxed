### Snippet: `Composition and Aggregation in Java`

This snippet differentiates between **composition** and **aggregation**, two types of "has-a" relationships where one class contains a reference to another. These patterns are alternatives to inheritance, used to build complex systems by assembling smaller objects.

### Snippet Goal

To practice defining classes that contain references to other objects, distinguishing between the strong, owner-dependent relationship of **composition** (where the component is created internally) and the weak, life-cycle independent relationship of **aggregation** (where the component is passed in).

### Core Concepts Explained

**1. Composition (Strong "Has-A")**

* **Relationship:** Represents a **strong dependency** where the component (e.g., `Engine`) is an *essential part* of the owner (e.g., `Car`).
* **Life Cycle:** The dependent object's life cycle is managed by the owner. The component is typically created **inside the owner's constructor** (`this.engine = new Engine(...)`) and dies when the owner object is destroyed.
* **Analogy:** A human body is **composed** of organs. The organ cannot exist meaningfully outside the body's life cycle.

**2. Aggregation (Weak "Has-A")**

* **Relationship:** Represents a **weak dependency** where the component (e.g., `Driver`) exists independently of the owner (e.g., `Vehicle`).
* **Life Cycle:** The dependent object is created **externally** and passed into the owner (via a constructor or a setter). The owner holds a reference to it but does not control its creation or destruction.
* **Analogy:** A vehicle **aggregates** a driver. The driver exists before and after the specific vehicle they drive is created or destroyed.

**3. Preference for Composition/Aggregation over Inheritance**

* **Design Principle:** "Favor **composition over inheritance**" is a key OOP guideline.
* **Reasoning:** Composition and aggregation offer greater **flexibility** and **decoupling** than inheritance. When a class is built from components, it is easier to swap out or change those components without modifying the class's core structure.

### Syntaxed Typing Focus

This snippet tests the instantiation and reference management patterns:

* **Composition Pattern:** Typing the `new Component()` call **inside** the constructor of the containing class (`Car`).
* **Aggregation Pattern:** Typing the assignment of an external reference passed as a parameter (`this.driver = d;`) via a setter or constructor.
* **Relationship Distinction:** Understanding and typing the code that demonstrates dependency (or lack thereof) on an object's life cycle.