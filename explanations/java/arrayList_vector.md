### Snippet: `ArrayList Vector in Java`

This snippet explores the most common list implementation, **`ArrayList`**, which uses a dynamically resizing array internally. It highlights the performance characteristics of array-backed lists using Big O notation, and contrasts `ArrayList` with the legacy, thread-safe **`Vector`**.

### Snippet Goal

To practice core `List` interface methods (`add()`, `get()`, `remove()`), understand the performance implications of indexed versus insertion operations in `ArrayList`, and recognize when to avoid the use of the deprecated **`Vector`** class.

### Core Concepts Explained

**1. `ArrayList` (The Default List)**

* **Implementation:** `ArrayList` implements the `List` interface using an array. When the array capacity is exceeded, a new, larger array is created, and all elements are copied over (a costly, amortized operation).
* **Performance:**
    * **`get(index)`:** $O(1)$ - **Fastest Operation.** Array memory is contiguous, allowing direct, constant-time access to any element by its index.
    * **`add()` (to end) / `remove()` (from end):** $O(1)$ - **Amortized Constant Time.** Efficient unless the list needs resizing or re-hashing.
    * **`add(index, element)` / `remove(index)` (from middle):** $O(N)$ - **Slowest Operation.** Inserting or removing an element in the middle requires shifting every subsequent element to maintain the integrity of the sequence.
* **Thread Safety:** `ArrayList` is **not synchronized** (not thread-safe).

**2. `Vector` (The Legacy List)**

* **Implementation:** Also array-backed, similar to `ArrayList`.
* **Synchronization:** All public methods in `Vector` are **synchronized**, making it thread-safe.
* **Drawback:** Synchronization adds significant overhead and performance penalty. In modern Java, `Vector` is considered legacy and should be replaced by `ArrayList` combined with concurrency utilities like `Collections.synchronizedList(new ArrayList())` or specialized concurrent collections when thread safety is required.

**3. Capacity vs. Size**

* **Size:** The number of elements currently stored in the list.
* **Capacity:** The size of the internal array. `ArrayList` and `Vector` manage capacity behind the scenes to optimize resizing.

### Syntaxed Typing Focus

This snippet tests proficiency in key list methods and instantiation:

* **Instantiation:** Typing the polymorphic declaration `List<String> list = new ArrayList<>();`.
* **Indexed Operations:** Typing the distinct methods for random access (`.get(index)`), insertion (`.add(index, element)`), and deletion (`.remove(index)`).
* **`Vector` Legacy:** Typing the `Vector` instantiation and its legacy method names (like `addElement`).