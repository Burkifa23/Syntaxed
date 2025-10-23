### Snippet: `Design Patterns in Java`

This snippet introduces **design patterns**, which are standardized, reusable solutions to common problems encountered in software design. Patterns represent industry best practices and lead to more maintainable, flexible, and robust code. We focus on two fundamental creational patterns: **Singleton** and **Factory Method**.

### Snippet Goal

To practice implementing the **Singleton Pattern** to enforce a single instance of a class, and to implement the **Factory Method Pattern** to centralize object creation logic, promoting loose coupling.

### Core Concepts Explained

**1. Singleton Pattern (Creational)**

* **Problem Solved:** Ensures that a class has only one instance and provides a global access point to that instance. This is useful for centralized resources like configuration managers, loggers, or thread pools.
* **Implementation:**
    * **Private Constructor:** Prevents external classes from using the `new` keyword to create instances.
    * **Private Static Instance:** Holds the single instance of the class.
    * **Public Static Access Method (`getInstance`)**: Provides the global access point, handling the initialization (often called **lazy initialization**) the first time it's called.

**2. Factory Method Pattern (Creational)**

* **Problem Solved:** Decouples the client code (the code that needs the object) from the object's instantiation logic. The client requests a product by type, and the factory decides which concrete class to create.
* **Implementation:**
    * **Product Interface:** Defines the contract for the objects being created (`Notification`).
    * **Concrete Products:** The actual classes implementing the interface (`EmailNotification`, `SMSNotification`).
    * **Factory Class:** Contains a static method (`createNotification`) that takes parameters and returns the appropriate implementation of the product interface. The client only needs to know the interface, not the concrete implementation details.

**3. Benefits of Design Patterns**

* **Reusability:** Provides a vocabulary for communicating design solutions with other developers.
* **Flexibility:** Patterns like Factory simplify changing implementations later (e.g., swapping a database type requires changing only the Factory, not every place the object is used).
* **Decoupling:** Reduces dependencies between classes, making the application easier to test and maintain.

### Syntaxed Typing Focus

This snippet tests proficiency in pattern-specific structural typing:

* **Singleton Enforcement:** Typing the **`private` constructor** and the **`private static` field**.
* **Factory Structure:** Typing the interface (`Notification`) and the conditional logic inside the factory method that returns a polymorphic object.
* **Object Instantiation:** Recognizing and typing the standard pattern `InterfaceType reference = Factory.createMethod(...)`.