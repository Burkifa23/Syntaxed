### Snippet: `Reflection API Java`

This snippet introduces the **Reflection API** (`java.lang.reflect`), which provides the ability to inspect and manipulate classes, fields, and methods at **runtime**. This capability is often referred to as metaprogramming and is the foundation for advanced Java frameworks, dependency injection tools, and testing libraries.

### Snippet Goal

To practice obtaining the **`Class`** object for a type, inspecting its members, and using reflection to **override Java's access control** to read and invoke **`private`** fields and methods dynamically.

### Core Concepts Explained

**1. The `Class` Object (The Entry Point)**

* The **`java.lang.Class`** is the starting point for all reflection. Every type loaded into the JVM has one `Class` object that describes its structure (fields, constructors, methods).
* **Obtaining the Class:** The code demonstrates the most common way to get the class object at runtime: **`Class.forName("full.class.Name")`**.

**2. Runtime Inspection and Manipulation**

The Reflection API provides specific classes to represent components of the loaded class:

* **`Field`**: Represents a class field (variable).
* **`Method`**: Represents a class method.
* **`Constructor`**: Represents a class constructor.

Methods like `getDeclaredField()` and `getDeclaredMethod()` are used to find fields and methods that are declared directly within the class, regardless of their access modifier (`public`, `private`, etc.).

**3. Bypassing Access Control**

* **`setAccessible(true)`**: This is the key reflection method used to override standard Java access modifiers. By calling this on a `private` field or method, the reflection code gains the ability to read, write, or invoke the member, bypassing encapsulation.
* **`invoke(Object instance, Object... args)`**: Used on a `Method` object to execute the method at runtime, passing the target instance and arguments.

**4. Reflection Drawbacks**

While powerful, reflection has significant downsides:

* **Performance Overhead:** Reflection is much slower than direct Java calls because the JVM cannot optimize it.
* **Security Risks:** Bypassing access control (`setAccessible(true)`) compromises encapsulation and security.
* **Maintenance:** Code that relies heavily on reflection can be fragile, breaking if class or field names are changed (since the compiler cannot check reflected names).

### Syntaxed Typing Focus

This snippet tests proficiency in advanced API usage and mandatory error handling:

* **Checked Exceptions:** Typing the necessary `try-catch` block, as reflection methods often throw checked exceptions (like `NoSuchMethodException` or `InvocationTargetException`).
* **Specific Reflection Classes:** Typing the fully qualified names of `java.lang.reflect.Field` and `java.lang.reflect.Method`.
* **Access Control:** Typing the crucial `setAccessible(true)` call to understand its role in bypassing encapsulation.