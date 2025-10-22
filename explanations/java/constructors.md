### Snippet: `Constructors Initialization in Java`

This snippet focuses on **constructors**, which are special methods used to initialize a new object immediately after memory is allocated. It also demonstrates **constructor overloading** and the use of the **`this` keyword** to differentiate between instance variables and local parameters.

### Snippet Goal

To practice defining and using the default constructor, creating a **parameterized constructor** to enforce state upon creation, and implementing **constructor chaining** via the `this()` call.

### Core Concepts Explained

**1. Default (No-Argument) Constructor**

* If a class does not explicitly define any constructor, the Java compiler provides a **default constructor** that takes no arguments. This is what was implicitly used in the previous `classes-objects.java` snippet.
* Once you define *any* constructor, the compiler **no longer provides the default constructor**.

**2. Parameterized Constructor**

* A constructor takes the same name as the class and has no return type (not even `void`).
* A **parameterized constructor** accepts input arguments, allowing the user to initialize the object's instance variables (state) at the moment of creation, preventing the object from existing in an uninitialized or invalid state.

**3. The `this` Keyword**

The `this` keyword serves two primary purposes in constructors:

* **Differentiating Variables:** It is used to refer to the **current object's instance variable** when a method parameter has the same name as an instance variable (`this.model = model`). This is common practice to avoid arbitrary variable names.
* **Constructor Chaining:** It is used as a method call (`this(...)`) to invoke another constructor within the same class. This is called **constructor chaining** and helps avoid code duplication. The `this(...)` call **must** be the very first statement inside the constructor body.

**4. Constructor Overloading**

Just like regular methods, constructors can be overloaded. This means a class can have multiple constructors, provided each one has a unique signature (a different number or type of parameters). This allows flexible object creation (e.g., creating a car with only a model name, or a car with all engine specs).

### Syntaxed Typing Focus

This snippet focuses on the critical constructor syntax rules:

* **No Return Type:** Typing the constructor definition without a return type.
* **`this` for Instance Variables:** Correctly using `this.variableName` to assign values from parameters.
* **Constructor Chaining:** Typing the `this(...)` call and ensuring it is the first line of the constructor where used.
* **Overloading:** Practicing multiple constructors with unique parameter lists.