## Concept: Dart Implicit Interfaces (`implements`)

**Category: Dart OOP Fundamentals**
**Target Documentation:** [https://dart.dev/language/classes#implicit-interfaces](https://dart.dev/language/classes#implicit-interfaces)

### Description
Dart does not have a dedicated `interface` keyword. Instead, **every class implicitly defines an interface** containing all its instance methods and variables. To adhere to this contract, a class uses the **`implements`** keyword. This mechanism forces the implementing class to provide a concrete implementation for every method and property defined in the original class. This enforces strong API contracts and promotes polymorphism.

### Code Explanation

1. **Implicit Interface Definition (`TaskContract`)**
   The `TaskContract` class, by its simple definition, automatically creates an interface. The contract includes its properties (`name`, `isCompleted`, `priority`) and its method (`markCompleted()`).

2. **Interface Implementation (`TodoItem implements TaskContract`)**
   The `TodoItem` class uses `implements TaskContract` to guarantee the Dart compiler that it will follow the exact contract.
   * **Mandatory Implementation:** The implementing class **must** provide concrete implementations for all members defined in the interface class, including fields. The `@override` annotation is used here for clarity and safety, although Dart requires the member to be present regardless.

3. **Polymorphism**
   In `main()`, a `TodoItem` instance is assigned to a variable of the interface type (`TaskContract`). This demonstrates **polymorphism**: the object is an instance of `TodoItem`, but it is treated as a `TaskContract`. This pattern is crucial in Flutter for handling generic logic and dependency injection.
