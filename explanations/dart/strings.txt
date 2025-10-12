## Concept: Dart String Manipulation and Formatting

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/language/built-in-types#strings](https://dart.dev/language/built-in-types#strings)

### Description
This snippet demonstrates the various ways to declare, format, and manipulate text data (Strings) in Dart. Strings are sequences of UTF-16 code units.

### Code Explanation

1. **String Literals and Quotes**
   Dart offers flexibility, allowing you to define strings using either **single (`'`) or double (`"`) quotes**. They are interchangeable, which helps in avoiding the need to escape characters within the string itself. You use the **backslash (`\`)** to escape a quote character if it must be included within a string defined by the same quote type (e.g., `'It\'s'`).

2. **String Interpolation**
   This is the preferred, readable way to embed variable values or the results of expressions directly into a string.
   * **Simple Interpolation:** Use the **dollar sign (`$`)** followed by the variable name for simple identifiers (e.g., `$name`).
   * **Expression Interpolation:** Use the dollar sign followed by **curly braces (`${}`)** for expressions, calculations, or method calls (e.g., `${age + 1}`).

3. **String Formatting**
   * **Multi-line Strings:** Use **triple quotes (`'''` or `"""`)** to create a string that naturally spans multiple lines, preserving line breaks.
   * **Raw Strings:** Precede the string literal with **`r`** (e.g., `r''`). This treats backslashes and dollar signs literally, ignoring interpolation and escape sequences. This is useful for file paths or regular expressions.
   * **Concatenation:** Adjacent string literals (e.g., `'a' 'b'`) are **automatically concatenated** by the Dart compiler, which is a neat way to break up very long strings cleanly.

4. **String Methods and Utilities**
   Strings are objects with many built-in utility methods:
   * **`length`**: Returns the number of characters.
   * **`toUpperCase()` / `toLowerCase()`**: Converts the string's case.
   * **`trim()`**: Removes leading and trailing whitespace.
   * **`contains()`**: Checks if the string contains a specific substring.
   * **`startsWith()` / `endsWith()`**: Checks the string's beginning or end.
   * **Equality (`==`)**: Compares the content of the strings (character by character).