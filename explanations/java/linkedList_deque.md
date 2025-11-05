### Snippet: `LinkedList Deque in java`

This snippet explores **`LinkedList`**, the primary implementation of the `List` interface that uses a doubly-linked list structure. It focuses on the crucial performance trade-offs compared to `ArrayList`, and demonstrates its role as a **`Deque`** (Double-Ended Queue).

### Snippet Goal

To practice using a `LinkedList` for fast insertion and deletion at the ends (head/tail), implement **`Deque`** (Stack/Queue) operations using the specialized methods (`addFirst`, `pollLast`), and recognize why random access is inefficient.

### Core Concepts Explained

**1. `LinkedList` Structure**

* **Doubly-Linked:** Each element (node) in a `LinkedList` stores the actual data, a reference to the **next** node, and a reference to the **previous** node.
* **Non-Contiguous Memory:** Unlike `ArrayList`, the nodes are scattered across the heap, connected only by pointers.

**2. `List` Performance Trade-Offs**

* **Insertion/Deletion at Ends:** $O(1)$ - **Fastest Operations.** Since the head/tail pointers are known, adding or removing an element only requires updating a few pointers, regardless of the list size.
* **Insertion/Deletion in Middle:** $O(N)$ - **Requires Traversal.** While the link update is $O(1)$, finding the node *before* the insertion point requires traversing the list, making the operation linear in the worst case.
* **`get(index)` (Random Access):** $O(N)$ - **Slowest Operation.** To access the element at index 50, the JVM must start at the beginning or end and follow the links 50 times.

**3. `Deque` Interface (Queue and Stack)**

* `LinkedList` is the primary implementation of the **`Deque`** (pronounced "deck") interface, which stands for **Double-Ended Queue**.
* **Queue Operations (FIFO - First-In, First-Out):** Uses `addLast()` (enqueue) and `pollFirst()` (dequeue).
* **Stack Operations (LIFO - Last-In, First-Out):** Uses `addFirst()` (push) and `pollFirst()` (pop) or `addLast()` and `pollLast()`.
* **Efficiency:** Because linked lists excel at head and tail modifications, they offer $O(1)$ performance for all `Deque` operations, making them highly efficient for queuing tasks.

### Syntaxed Typing Focus

This snippet tests proficiency in specialized methods:

* **Polymorphic Declaration:** Typing `List<T> list = new LinkedList<>();` versus the specialized `Deque<T> deque = new LinkedList<>();`.
* **Deque Methods:** Accurately typing the pair methods that operate on both ends: `addFirst()`, `addLast()`, `pollFirst()`, `pollLast()`, and `peekLast()`.
* **Mid-List Operations:** Practicing the `add(index, element)` method to understand its linear $O(N)$ performance hit.