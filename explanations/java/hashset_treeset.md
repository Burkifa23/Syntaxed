### Snippet: `HashSet TreeSet in Java`

This snippet explores the **`Set`** interface, which represents a collection that contains **no duplicate elements**. It contrasts the performance and ordering characteristics of the two primary implementations: the high-speed, hash-based **`HashSet`** and the sorted, tree-based **`TreeSet`**.

### Snippet Goal

To practice enforcing uniqueness with the `Set` interface, understand the different performance profiles of hashing ($O(1)$) versus tree traversal ($O(\log N)$), and implement the **`Comparable`** interface to enable custom object sorting in `TreeSet`.

### Core Concepts Explained

**1. The `Set` Interface**

* **Uniqueness:** The defining feature of a `Set` is that it **guarantees no duplicate elements**. If you attempt to add an element that already exists (based on the `equals()` method), the `add()` method will return `false` and the set will remain unchanged.

**2. `HashSet` (Unordered and Fast)**

* **Implementation:** `HashSet` uses a **hash table** (backed by a `HashMap`) internally. It relies on the object's **`hashCode()`** method to determine where the element should be stored.
* **Performance:** Operations like `add()`, `remove()`, and `contains()` are typically **$O(1)$ (constant time)**, making it the fastest general-purpose `Set` implementation.
* **Ordering:** It offers **no guarantee** regarding the iteration order of the elements. The order can change based on the JVM's memory and hashing implementation.

**3. `TreeSet` (Sorted and Slower)**

* **Implementation:** `TreeSet` uses a **Red-Black Tree** (a type of self-balancing binary search tree) internally.
* **Performance:** Operations are generally **$O(\log N)$ (logarithmic time)**. While slower than `HashSet`, the performance hit is minimal for large sets.
* **Ordering:** Elements are always kept in **sorted order**. This order can be the element's **natural order** (if the element implements `Comparable`) or a custom order defined by a **`Comparator`** supplied at creation.

**4. Enabling Custom Object Sorting**

For any custom class to be used effectively in a `TreeSet`, the class must implement the **`Comparable<T>`** interface, which requires implementing the single method **`compareTo(T other)`**.

* **`compareTo` Result:**
    * Returns **0** if objects are equal.
    * Returns **a negative number** if the current object comes before the other object.
    * Returns **a positive number** if the current object comes after the other object.

### Syntaxed Typing Focus

This snippet tests proficiency in interface typing and generic constraint enforcement:

* **Instantiation Contrast:** Typing `new HashSet<>()` versus `new TreeSet<>()`.
* **Uniqueness Check:** Practicing multiple `add()` calls to observe the uniqueness constraint.
* **`Comparable` Typing:** Accurately typing the `implements Comparable<T>` clause and the required `public int compareTo(T other)` method signature for custom sorting.