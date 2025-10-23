### Snippet: `Inner Classes in Java`

This snippet explores **inner classes**, which are classes defined entirely within the body of another class. Inner classes offer increased encapsulation and can access the private members of the enclosing outer class. They are categorized based on their definition location and use of the `static` modifier.

### Snippet Goal

To practice defining and instantiating a **Member Inner Class**, a **Static Nested Class**, a **Local Inner Class**, and to recognize the pattern of an **Anonymous Inner Class** (which is now largely replaced by Lambda expressions).

### Core Concepts Explained

**1. Member Inner Class (Non-Static)**

* **Relationship:** An instance of a member inner class is tightly bound to a specific instance of the outer class.
* **Instantiation:** It requires an instance of the outer class to be created first (`outerInstance.new MemberInner()`).
* **Access:** Can directly access **all** members (including private fields) of the outer class instance that created it. This is their primary advantage.

**2. Static Nested Class**

* **Relationship:** It is simply a regular class nested inside another for logical grouping, but it is **not tied to an instance** of the outer class.
* **Instantiation:** Can be created independently (`new Outer.StaticNested()`) and accessed directly using the outer class name.
* **Access:** **Can only access static members** of the outer class, not instance members, because it exists without an outer object.

**3. Local Inner Class**

* **Definition:** A class defined inside the body of a method or scope block.
* **Visibility:** Its scope is strictly limited to the method or block where it is defined; it cannot be accessed from outside that block.
* **Access to Locals:** Can access local variables of the surrounding method only if those variables are implicitly or explicitly **`final`** (or effectively final).

**4. Anonymous Inner Class**

* **Definition:** A class without a name, defined and instantiated in a single expression. It is typically used to implement an interface or extend a class once (e.g., implementing the `Runnable` interface).
* **Modern Replacement:** Anonymous inner classes with a single abstract method are almost always replaced by **Lambda expressions** in modern Java (Java 8+), offering a much cleaner syntax.

### Syntaxed Typing Focus

This snippet tests proficiency in complex instantiation syntax:

* **Member Inner Instantiation:** Typing the full and complex pattern (`outerInstance.new MemberInner()`).
* **Static Access:** Correctly accessing the static nested class using the dot notation on the outer class name (`Outer.StaticNested.method()`).
* **Method Definition:** Typing the body and structure of a traditional anonymous inner class, contrasting it with the modern Lambda syntax.