## Concept: Dart Basic Collections (List, Set, Map)

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/language/collections](https://dart.dev/language/collections)

### Description
This snippet demonstrates the three core built-in data structures (Collections) in Dart: **List**, **Set**, and **Map**. Collections are used to group and manage related objects.

### Code Explanation

1. **Lists (Ordered Collection)**
   * Lists are ordered groups of values (similar to arrays in other languages) where elements are accessed by their zero-based index.
   * **Key Feature:** They **maintain insertion order** and **allow duplicate** elements.
   * **Operations:** Demonstrates basic operations like indexing (`[0]`), adding elements (`.add()`), removing elements (`.remove()`), and checking size (`.length`).

2. **Sets (Unique, Unordered Collection)**
   * Sets are collections of values where **every element must be unique**. If you try to add a duplicate, it is ignored.
   * **Key Feature:** They are designed for fast membership checking and mathematical set operations.
   * **Operations:** Demonstrates creating an empty set using the explicit type syntax (`<String>{}`), ensuring uniqueness, and performing set math like `union()` and `intersection()`.

3. **Maps (Key-Value Pairs)**
   * Maps are collections that associate unique **Keys** with **Values**. They are used to look up values efficiently using the key.
   * **Key Feature:** Keys must be unique, but values can be duplicated. Keys can be of any type (e.g., `String`, `int`).
   * **Operations:** Demonstrates accessing values using key indexing (`gifts['first']`), adding new pairs, and checking for key existence (`.containsKey()`). The `.forEach()` method is used to easily iterate through all key-value entries.

4. **Common Collection Properties**
   Dart provides several utility properties available on most collections, such as `.first`, `.last`, `.isEmpty`, `.isNotEmpty`, and the search method `.contains()`.