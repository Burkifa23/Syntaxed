### Snippet: `polymorphism-dynamic-binding.java`

This snippet explores **polymorphism** (the ability of a single interface to represent multiple forms) and **dynamic method dispatch** (the mechanism Java uses to resolve method calls at runtime). These concepts are essential for writing flexible, reusable, and extensible code.

### Snippet Goal

To practice creating polymorphic references by assigning subclass objects to superclass variables (upcasting), and to observe how the JVM uses **dynamic binding** to ensure the correct overridden method is executed based on the object's actual type.

### Core Concepts Explained

**1. Polymorphism ("Many Forms")**

* Polymorphism allows you to treat objects of different classes in a uniform way, provided they share a common parent class or interface.
* **Upcasting:** The most common form of polymorphism is assigning an object of a subclass to a variable of its superclass type: `ParentType reference = new ChildType();`. The object itself retains its true identity (`ChildType`), but the reference is restricted to the methods defined by `ParentType`.

**2. Dynamic Method Dispatch (Dynamic Binding)**

* **Definition:** Dynamic method dispatch is the process by which a call to an overridden method is resolved at **runtime** rather than compile time.
* **Mechanism:** When a method is called through a superclass reference (`Vehicle vehicleRef.start()`), the JVM ignores the reference type (`Vehicle`) and looks at the **actual object type** it points to (`Car` or `Truck`). It then executes the most specific, overridden version of that method belonging to the actual object.
* **Benefit:** This allows you to write a single generic method (like `processVehicle(Vehicle v)`) that can correctly handle any number of different subclass types you might create in the future.

**3. Method Overriding Prerequisite**

Dynamic binding **only works with overridden methods**. If the subclass does not override a method, the superclass version will be executed. Methods that are `static` or `final` cannot be overridden, and therefore cannot participate in dynamic binding.

### Syntaxed Typing Focus

This snippet focuses on distinguishing between compile-time and runtime types:

* **Polymorphic Declaration:** Typing `ParentType reference = new ChildType();` to correctly instantiate and assign the object.
* **Array/Collection Usage:** Practicing placing heterogeneous object types (different subclasses) into a single array or collection typed by the common superclass.
* **Method Invocation:** Calling methods on the superclass reference (`vehicleRef.describe()`) while understanding that the JVM dynamically finds the subclass implementation.