### Snippet: `Object Class Methods in Java`

This snippet explores the fundamental methods inherited by **every single class** in Java from the superclass **`java.lang.Object`**. Understanding these methods—especially **`equals()`** and **`hashCode()`**—is critical for correct behavior when using objects in collections like `HashMap` and `HashSet`.

### Snippet Goal

To practice safely overriding the **`toString()`**, **`equals()`**, and **`hashCode()`** methods to ensure that objects provide meaningful descriptions and adhere to the strict contract required for proper functioning in Java's Collections Framework.

### Core Concepts Explained

**1. `toString()` Method**

* **Default Behavior:** The default `Object` implementation returns the class name followed by the hash code (e.g., `Product@4a5747f5`). This is usually unhelpful.
* **Override Purpose:** It should be overridden to return a concise, human-readable string representation of the object's state (e.g., field values). This method is implicitly called when an object is printed (`System.out.println(obj)`).

**2. `equals(Object obj)` Method**

* **Default Behavior:** The default implementation checks only for **reference equality** (i.e., whether both references point to the exact same object in memory).
* **Override Purpose:** It must be overridden to define **content equality** (i.e., two separate objects are considered "equal" if their key fields, like an ID or SKU, match).
* **Best Practice:** The implementation must check for self-reference, check for null/type mismatches, and then cast the object to the correct type before comparing fields.

**3. `hashCode()` Method (The Contract)**

* **The Rule:** If two objects are equal according to the `equals()` method, then calling the `hashCode()` method on each object **must** produce the same integer result.
* **Why it Matters:** Hash-based collections (`HashMap`, `HashSet`) use the hash code to quickly determine where an object is stored. If two equal objects have different hash codes, the collection will fail to find the object, violating collection integrity.
* **Implementation:** The overridden `hashCode()` must generate a hash based on the same key fields used in the `equals()` comparison. The utility method **`java.util.Objects.hash()`** is the modern, easy way to implement this correctly.

**4. `clone()` and `finalize()` (Briefly)**

* **`clone()`:** Used to create a shallow copy of an object. It requires the class to implement the `Cloneable` marker interface. It is rarely used in modern Java, often replaced by copy constructors or immutable data patterns.
* **`finalize()`:** Called by the Garbage Collector (GC) before the object is destroyed. It is unreliable and deprecated in recent Java versions, replaced by cleaners and cleaner actions.

### Syntaxed Typing Focus

This snippet tests proficiency in mandatory overrides:

* **Signature Typing:** Accurately typing the exact method signatures (`equals(Object o)`) and the `@Override` annotation.
* **Contract Enforcement:** Typing the logic for `equals()` that correctly handles reference checks, null checks, and type comparison using `getClass()`.
* **Utility Use:** Typing the modern, safe way to generate hash codes using **`java.util.Objects.hash()`**.