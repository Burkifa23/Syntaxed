### Snippet: `methods-parameters.java`

This snippet introduces **methods**, the fundamental building blocks for modularity and reusability in Java. It demonstrates how to define methods, pass parameters, return values, and leverage advanced features like overloading and variable arguments.

### Snippet Goal

To practice defining and invoking methods with different return types and parameters, implement **method overloading**, and use the flexible **variable arguments (`varargs`)** feature.

### Core Concepts Explained

**1. Method Definition Structure**

A method definition in Java consists of four main parts:

* **Access Modifier (`public`):** Defines where the method can be accessed (usually `public` for utility methods).
* **Static/Instance:** **`static`** means the method belongs to the class itself and can be called without creating an object. (This is common for utility and `main` methods).
* **Return Type (`int`, `double`, `void`):** The data type of the value the method sends back to the caller. **`void`** indicates no value is returned.
* **Parameters:** The list of variables the method accepts as input, defined within parentheses.

**2. Method Overloading**

Method overloading allows multiple methods within the same class to share the exact same name, provided they have a **different signature**. The signature is defined by:

* The **number** of parameters.
* The **type** of parameters.
* The **order** of parameters.

*Note: The return type alone is not sufficient to distinguish overloaded methods.*

**3. Variable Arguments (`varargs`)**

The `varargs` feature (`...`) allows a method to accept **zero or more** arguments of a specified type.

* Inside the method body, the `varargs` parameter is treated as a standard **array** (`int[]` in this example).
* The `varargs` parameter **must** be the last parameter in the method's parameter list.

### Syntaxed Typing Focus

This snippet tests proficiency in essential signature details:

* **Signature Typing:** Accurately typing the `public static` keywords and ensuring correct return types.
* **Overloading Distinction:** Recognizing and typing method definitions that are identical except for their parameter types.
* **Varargs Ellipsis:** Correctly using the **three-dot ellipsis (`...`)** syntax for defining a variable argument list.
* **Return Statement:** Practicing the `return` keyword for exiting the method and sending back a value.