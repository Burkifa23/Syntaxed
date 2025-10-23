### Snippet: `Solid-Principles in Java`

This snippet introduces the **SOLID principles**—five design rules that guide software architects and developers in creating systems that are easy to maintain, extend, and refactor. SOLID is an acronym standing for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.

### Snippet Goal

To practice structuring code that adheres to **SRP**, **OCP**, **LSP**, and **DIP**, focusing on separating concerns and depending on abstractions (interfaces) rather than concrete implementations.

### Core Concepts Explained

**1. S - Single Responsibility Principle (SRP)**

* **Rule:** A class should have **only one reason to change**.
* **Demonstration:** The code separates responsibilities: `ReportData` holds data, `ReportGenerator` handles content creation, and `ReportPrinter` handles output. If the output mechanism changes (e.g., to PDF), only `ReportPrinter` needs modification.

**2. O - Open/Closed Principle (OCP)**

* **Rule:** Software entities should be **open for extension, but closed for modification**.
* **Demonstration:** The `Notifier` interface is closed (stable). To add a new notification type (e.g., `PushNotifier`), you simply **extend** the system by creating a new class that implements the existing interface. Existing classes (`EmailNotifier`) and clients (`NotificationService`) do not need to be modified.

**3. L - Liskov Substitution Principle (LSP)**

* **Rule:** Subtypes must be entirely **substitutable** for their base types without altering the correctness of the program.
* **Demonstration:** The `NotificationService` can accept and correctly use *any* implementation of the `Notifier` interface (`EmailNotifier`, `SMSNotifier`, or `PushNotifier`) interchangeably. The client doesn't need to know the specific subclass, proving that substitution works.

**4. I - Interface Segregation Principle (ISP)**

* **Rule:** Clients should not be forced to depend on interfaces they do not use. (Prefer many small, role-specific interfaces over one large, bloated interface.)
* *Note: This principle is conceptually covered by using the single, focused `Notifier` interface.*

**5. D - Dependency Inversion Principle (DIP)**

* **Rule:** High-level modules should not depend on low-level modules; **both should depend on abstractions (interfaces)**.
* **Demonstration:** The high-level `NotificationService` (business logic) does not rely directly on the concrete `EmailNotifier` class. Instead, it relies on the abstract `Notifier` interface. The concrete notifier is injected into the service, inverting the typical control flow.

### Syntaxed Typing Focus

This snippet tests proficiency in designing polymorphic systems:

* **Abstraction Enforcement:** Typing clean interfaces (`Notifier`) to define contracts.
* **Dependency Injection:** Typing the method signature that takes an interface type (`Notifier notifier`) as an argument, demonstrating DIP.
* **Structural Separation:** Typing the different small classes (`ReportData`, `ReportGenerator`, `ReportPrinter`) to enforce SRP.