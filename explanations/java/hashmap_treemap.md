### Snippet: `HashMap TreeMap in java`

This snippet explores the **`Map`** interface, which stores data as unique **key-value pairs**. It contrasts the two most important `Map` implementations: the hash-based **`HashMap`** and the tree-based **`TreeMap`**, highlighting the trade-offs between speed and ordering.

### Snippet Goal

To practice using the `put()`, `get()`, and `keySet()` methods for key-value manipulation, understand the importance of the **`equals()`/`hashCode()` contract for keys in `HashMap`**, and implement key sorting using **`TreeMap`**.

### Core Concepts Explained

**1. The `Map` Interface**

* **Key-Value Storage:** A map cannot contain duplicate keys. Each key maps to exactly one value.
* **Core Methods:**
    * **`put(K key, V value)`:** Inserts or updates an entry.
    * **`get(Object key)`:** Retrieves the value associated with the specified key.
    * **`keySet()`:** Returns a `Set` view of the keys.

**2. `HashMap` (Fastest Map Implementation)**

* **Implementation:** `HashMap` uses an array of buckets, where the key's **`hashCode()`** determines which bucket the entry is placed in.
* **Performance:** Lookup, insertion, and deletion are typically **$O(1)$ (Constant Time)** in the average case. Performance degrades to $O(N)$ if many keys have the same hash code (hash collisions).
* **Key Requirement:** For `HashMap` to work correctly, the key objects **must correctly override both `equals()` and `hashCode()`** (the `equals`/`hashCode` contract). If two keys are equal, they must produce the same hash code.
* **Ordering:** Entries are **unordered**.

**3. `TreeMap` (Sorted Map Implementation)**

* **Implementation:** `TreeMap` uses a **Red-Black Tree** (a self-balancing Binary Search Tree). Keys are stored in nodes in the tree structure. 
* **Performance:** Lookup, insertion, and deletion are guaranteed **$O(\log N)$ (Logarithmic Time)**, as the operation requires navigating the height of the tree.
* **Ordering:** Keys are always kept in **sorted order**, either by their natural order (if the key implements `Comparable`) or by an external `Comparator`. This is excellent for iteration tasks that require ordering.

**4. `LinkedHashMap` (A Middle Ground)**

* (Note): While not fully detailed here, `LinkedHashMap` extends `HashMap` but uses a doubly-linked list internally to maintain the **insertion order** of entries. It retains $O(1)$ hash-based performance while providing predictable iteration.

### Syntaxed Typing Focus

This snippet tests proficiency in key-value operations and instantiation choices:

* **Instantiation Contrast:** Typing the polymorphic declaration `Map<K, V> map = new HashMap<>();` versus `new TreeMap<>();`.
* **Map Methods:** Accurately typing the essential `put(K, V)`, `get(K)`, and iterating through the keys using `keySet()`.
* **Key Typing:** Understanding that the key type must adhere to the contract needed by the map implementation (e.g., keys in `TreeMap` must be comparable).