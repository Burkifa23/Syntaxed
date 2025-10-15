## Concept: Dart Extension Methods

**Category: Dart Advanced Concepts**
**Target Documentation:** [https://dart.dev/language/extension-methods](https://dart.dev/language/extension-methods)

### Description
**Extension Methods** allow you to add new functionality (methods, getters, and setters) to existing classes without modifying their source code. This is a powerful feature for improving code readability, especially when working with built-in Dart types (like `String` or `List`) or classes from external libraries (like Flutter widgets).

### Code Explanation

1. **Extension Definition (`extension ... on Type`)**
   The syntax `extension Name on Type` is used to create an extension.
   * **Example:** `extension StringExtensions on String` adds functionality specifically to the built-in `String` class.

2. **Adding New Members**
   Inside the extension block, you can define:
   * **Methods:** The `capitalize()` method is added to `String`, allowing any string instance to call `myString.capitalize()`.
   * **Getters:** The `isCapitalized` getter is added to `String`, allowing it to be accessed like a property (`myString.isCapitalized`).

3. **`this` Keyword in Extensions**
   Inside the extension's methods and getters, the **`this`** keyword refers to the instance of the type being extended (e.g., the `String` object itself).

4. **Extension on Generic Types**
   Extensions can also be applied to generic types with specific constraints. The `ListSum on List<int>` extension is specifically designed to work only on lists whose elements are integers, enabling a custom `sum()` method for that specific list type. This maintains type safety while adding utility.