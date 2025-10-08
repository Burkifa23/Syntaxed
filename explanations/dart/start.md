## Concept: Dart Program Entry Point (`void main()`)

**Category: Dart Basics (Foundation)**
**Target Documentation:** [dart.dev/language](https://dart.dev/language)

### Description

This snippet demonstrates the minimal, required structure for running any standalone Dart application. It introduces the mandatory entry function, `main()`, where all program execution begins.

### Code Explanation

1. **`void main()`**

   * This defines the primary starting function of the Dart program.

   * **`main`**: This function is the mandatory entry point. Dart execution always begins here.

   * **`void`**: This keyword specifies that the function does not return any value (it simply executes its logic and finishes).

2. **`print('Hello, World!');`**

   * This line executes the program's intended action.

   * **`print()`**: This is a built-in Dart function used to display output to the standard output device (usually the terminal or console).

   * **String Literal**: The text `'Hello, World!'` is the simple string literal being passed to the `print` function to be displayed.

In summary, this code tells the Dart runtime: "Start here, and display this text to the user." All other application logic, from variables to network calls, must be initiated directly or indirectly from within this single entry point.