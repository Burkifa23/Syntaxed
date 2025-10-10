## Concept: Dart Commenting and Documentation

**Category: Dart Basics**
**Target Documentation:** [https://dart.dev/language/comments](https://dart.dev/language/comments)

### Description
This code demonstrates the three primary ways to include non-executable notes (comments) in Dart code, which are crucial for self-documentation and application maintainability.

### Code Explanation

1. **Single-Line Comments (`//`)**
   * **Syntax:** Start the line with two forward slashes (`//`).
   * **Purpose:** Used for short explanations of a single line of code or logic. Everything from the `//` until the end of the line is ignored by the compiler.
   * **Note:** They can be placed on their own line or inline after a statement.

2. **Multi-Line Block Comments (`/* */`)**
   * **Syntax:** Enclose the text between `/*` and `*/`.
   * **Purpose:** Used for longer explanations that span multiple lines, or to temporarily disable (comment out) blocks of code. Unlike in some other languages, these block comments **can be nested** in Dart.

3. **Documentation Comments (`///` or `/** */`)**
   * **Syntax:** Start the line with three forward slashes (`///`) or use multi-line block syntax starting with `/**`. The `///` syntax is generally preferred.
   * **Purpose:** This is the most important type of comment for Flutter/Dart developers. It is used by the `dart doc` tool to generate official HTML API documentation.
   * **Linking:** Documentation comments support Markdown and allow you to use `[square brackets]` to link directly to other classes, methods, and parameters within the generated documentation.

4. **Common Comment Patterns (`TODO` and `FIXME`)**
   * **Purpose:** These patterns are conventions recognized by developers and IDEs for internal task tracking and code maintenance.
   * **`TODO`:** Marks code that needs to be finished or fully implemented later.
   * **`FIXME`:** Marks an area of known or suspected incorrect code that needs correction.

