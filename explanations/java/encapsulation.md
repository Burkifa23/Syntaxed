### Snippet: `Encapsulation Access Modifiers`

This snippet focuses on **encapsulation**, a core OOP principle that involves bundling data (fields) and the methods that operate on that data into a single unit (a class). It uses **access modifiers** to control visibility and protect internal state from unauthorized modification, promoting data integrity.

### Snippet Goal

To practice declaring fields as **`private`** to hide implementation details and expose them safely through controlled **`public` getter and setter methods**. It also demonstrates the difference between the **`public`**, **`private`**, and **package-private** access levels.

### Core Concepts Explained

**1. Encapsulation (Data Hiding)**

* **Definition:** Encapsulation is the practice of restricting direct access to an object's internal components (fields).
* **Implementation:** This is achieved by declaring fields as **`private`** and providing **`public`** methods (**getters** and **setters**) to read and write those fields.
* **Benefit:** It allows the class to control *how* its data is accessed and modified (e.g., adding validation logic inside the setter to prevent invalid data assignment).

**2. Access Modifiers**

Access modifiers determine which parts of the code can access a class, method, or field.

* **`private`**: The member is accessible **only within the class** where it is declared. This is the foundation of encapsulation for fields.
* **Package-Private (Default)**: If no modifier is specified, the member is accessible **only within the same package**. This is commonly used for internal utility classes or fields within a tightly coupled package.
* **`protected`**: The member is accessible within the **same package** and by all **subclasses** (even if those subclasses are in a different package).
* **`public`**: The member is accessible **from anywhere** (globally accessible). This is typically used for external methods (the public API of the class).

**3. Getters and Setters (Accessor and Mutator Methods)**

* **Getter (Accessor):** A `public` method used to **read** the value of a private field (e.g., `public String getName()`).
* **Setter (Mutator):** A `public` method used to **write** or update the value of a private field (e.g., `public void setName(String name)`). Setters often include validation checks before making the assignment.

### Syntaxed Typing Focus

This snippet tests proficiency in applying access rules and standard coding patterns:

* **Field Declaration:** Typing all critical instance variables as **`private`**.
* **Method Visibility:** Declaring the accessor methods (`get/set`) as **`public`** to form the class's public API.
* **Naming Conventions:** Following the standard Java bean naming convention for getters and setters (e.g., `getSpeed`, `setSpeed`).
* **Conditional Logic:** Practicing inserting conditional logic (`if` statements) inside setter methods to demonstrate data validation, which is the key practical benefit of encapsulation.