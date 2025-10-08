Syntaxed Learning Platform: Comprehensive Dart & Flutter Curriculum
This curriculum is updated to cover 54 focused concepts, including essential features from Dart 3  and modern Flutter best practices (Keys, Theming, HTTP Fetching, and Provider State Management).

### 1. Dart Basics (9 Snippets)

`start.dart`

**Concept Taught**: Hello, World!

**Documentation Focus**: [dart.dev/guides/language/language-tour](https://dart.dev/guides/language/language-tour)

---

`variables.dart`

**Concept Taught**: Variable declarations (var, final, const)

**Documentation Focus**: [dart.dev/language/variables](https://dart.dev/language/variables)

--- 

null-safety.dart
Concept Taught: Nullable types, null assertion (!), null-aware operators (?., ??)

Documentation Focus: dart.dev/null-safety/understanding-null-safety

basic-types.dart
Concept Taught: int, double, String, bool basic usage

Documentation Focus: dart.dev/language/built-in-types

strings.dart
Concept Taught: String interpolation ($, ${}), literals, multi-line strings

Documentation Focus: dart.dev/language/built-in-types#strings

control-flow.dart
Concept Taught: if/else, loops (for, while), basic switch statements

Documentation Focus: dart.dev/language/control-flow

records-patterns.dart (NEW)
Concept Taught: Records (returning multiple values) and Patterns (destructuring)

Documentation Focus: dart.dev/language/records-and-patterns

functions.dart
Concept Taught: Function syntax, positional/named/arrow functions

Documentation Focus: dart.dev/language/functions

collections-basic.dart
Concept Taught: List, Set, Map creation and basic operations

Documentation Focus: dart.dev/language/collections

comments.dart
Concept Taught: Single-line, multi-line, documentation comments (///)

Documentation Focus: dart.dev/guides/language/effective-dart/documentation

2. Dart OOP Fundamentals (6 Snippets)
classes-basic.dart
Concept Taught: Class definition, properties, and methods

Documentation Focus: dart.dev/language/classes

constructors.dart
Concept Taught: Default, named, initializer lists, and factory constructors

Documentation Focus: dart.dev/language/constructors

inheritance.dart
Concept Taught: extends, super, method overriding

Documentation Focus: dart.dev/language/inheritance

mixins.dart
Concept Taught: Mixin definition (mixin keyword) and usage (with keyword)

Documentation Focus: dart.dev/language/mixins

interfaces.dart
Concept Taught: Implicit interfaces and the implements keyword

Documentation Focus: dart.dev/language/classes#implicit-interfaces

abstract-classes.dart
Concept Taught: Abstract classes and abstract methods

Documentation Focus: dart.dev/language/abstract-classes

3. Dart Advanced Concepts (7 Snippets)
generics.dart
Concept Taught: Generic types, type parameters (<T>), bounds (extends)

Documentation Focus: dart.dev/language/generics

extension-methods.dart
Concept Taught: Extension syntax, adding methods to existing types

Documentation Focus: dart.dev/language/extension-methods

enums.dart
Concept Taught: Basic and enhanced enums (with members/methods)

Documentation Focus: dart.dev/language/enums

json-serialization.dart (NEW)
Concept Taught: JSON encoding/decoding using dart:convert (manual serialization)

Documentation Focus: dart.dev/guides/libraries/library-tour#dartconvert-for-json-and-utf-8

async-await.dart
Concept Taught: Future, async/await basic patterns and non-blocking code

Documentation Focus: dart.dev/language/async

streams-basic.dart
Concept Taught: Stream creation, listening, and basic usage

Documentation Focus: dart.dev/language/streams

error-handling.dart
Concept Taught: try/catch, on, finally, and throw

Documentation Focus: dart.dev/language/error-handling

4. Flutter Widget Basics (7 Snippets)
hello-world.dart
Concept Taught: Minimal Flutter app, runApp(), Text

Documentation Focus: docs.flutter.dev/get-started/install (Hello World)

text-widget.dart
Concept Taught: Text widget, styling, TextStyle properties

Documentation Focus: api.flutter.dev/flutter/widgets/Text-class.html

container-widget.dart
Concept Taught: Container properties, decoration, padding, margin

Documentation Focus: api.flutter.dev/flutter/widgets/Container-class.html

stateless-widget.dart
Concept Taught: StatelessWidget structure and build method

Documentation Focus: docs.flutter.dev/ui/widgets-intro#stateless-widgets

stateful-widget.dart
Concept Taught: StatefulWidget, State class, and setState for dynamic updates

Documentation Focus: docs.flutter.dev/ui/state/stateful-widget

keys-widget.dart (NEW)
Concept Taught: Value Keys and Global Keys for widget identification

Documentation Focus: docs.flutter.dev/testing/with-platform-docs/widget-keys

widget-tree.dart
Concept Taught: Widget composition, parent-child relationships, and rendering order

Documentation Focus: docs.flutter.dev/ui/widgets-intro

5. Flutter Layout Widgets (6 Snippets)
row-column.dart
Concept Taught: Row, Column, MainAxisAlignment, CrossAxisAlignment

Documentation Focus: docs.flutter.dev/ui/layout/row-column

expanded-flexible.dart
Concept Taught: Expanded, Flexible, and the flex property within Flex widgets

Documentation Focus: docs.flutter.dev/ui/layout/row-column#expanding-widgets

stack-positioned.dart
Concept Taught: Stack, Positioned, and layering widgets

Documentation Focus: docs.flutter.dev/ui/layout/stack

center-align.dart
Concept Taught: Center, Align, and using Alignment properties

Documentation Focus: api.flutter.dev/flutter/widgets/Align-class.html

padding-margin.dart
Concept Taught: Padding widget and using EdgeInsets factory constructors

Documentation Focus: api.flutter.dev/flutter/widgets/Padding-class.html

sized-box.dart
Concept Taught: SizedBox, using width and height for spacing and constraints

Documentation Focus: api.flutter.dev/flutter/widgets/SizedBox-class.html

6. Flutter Material Design (7 Snippets)
material-app.dart
Concept Taught: MaterialApp, home, title, and debug banner configuration

Documentation Focus: api.flutter.dev/flutter/material/MaterialApp-class.html

scaffold-basic.dart
Concept Taught: Scaffold, appBar, body, and floatingActionButton structure

Documentation Focus: api.flutter.dev/flutter/material/Scaffold-class.html

theming-colors.dart (NEW)
Concept Taught: App Theming, ThemeData, and using ColorScheme for Material 3 design

Documentation Focus: docs.flutter.dev/platform-integration/new-material-3-theme

app-bar.dart
Concept Taught: AppBar, title, actions, leading, and customization

Documentation Focus: api.flutter.dev/flutter/material/AppBar-class.html

elevated-button.dart
Concept Taught: ElevatedButton, onPressed, style, and basic styling

Documentation Focus: api.flutter.dev/flutter/material/ElevatedButton-class.html

text-field.dart
Concept Taught: TextField, TextEditingController, and decoration (InputDecoration)

Documentation Focus: api.flutter.dev/flutter/material/TextField-class.html

list-tile.dart
Concept Taught: ListTile, leading, title, subtitle, and trailing

Documentation Focus: api.flutter.dev/flutter/material/ListTile-class.html

7. Flutter Interactivity (6 Snippets)
gesture-detector.dart
Concept Taught: GestureDetector, onTap, onDoubleTap, onLongPress

Documentation Focus: api.flutter.dev/flutter/widgets/GestureDetector-class.html

inkwell-widget.dart
Concept Taught: InkWell and InkResponse for Material ripple effects

Documentation Focus: api.flutter.dev/flutter/material/InkWell-class.html

form-validation.dart
Concept Taught: Form, TextFormField, and validator functions

Documentation Focus: docs.flutter.dev/cookbook/forms/validation

state-management.dart
Concept Taught: Lifting state up (parent controls child via callback)

Documentation Focus: docs.flutter.dev/ui/state/stateful-widget#lifting-state-up

http-fetching.dart (NEW)
Concept Taught: Basic Asynchronous HTTP GET request using the http package

Documentation Focus: docs.flutter.dev/cookbook/networking/fetch-data

navigation-basic.dart
Concept Taught: Navigator.push, MaterialPageRoute, basic screen navigation

Documentation Focus: docs.flutter.dev/ui/navigation/named-routes#push-named

8. Flutter Advanced Patterns (6 Snippets)
inherited-widget.dart
Concept Taught: InheritedWidget for simple, subtree data sharing

Documentation Focus: api.flutter.dev/flutter/widgets/InheritedWidget-class.html

provider-basic.dart (NEW)
Concept Taught: ChangeNotifier and ChangeNotifierProvider (The practical application of inherited state)

Documentation Focus: pub.dev/packages/provider (Official package documentation pattern)

value-notifier.dart
Concept Taught: ValueNotifier and ValueListenableBuilder (Simple state management)

Documentation Focus: api.flutter.dev/flutter/foundation/ValueNotifier-class.html

stream-builder.dart
Concept Taught: StreamBuilder for handling and displaying real-time or continuous data updates (ideal for Supabase)

Documentation Focus: api.flutter.dev/flutter/widgets/StreamBuilder-class.html

future-builder.dart
Concept Taught: FutureBuilder for displaying data fetched asynchronously (e.g., loading states)

Documentation Focus: api.flutter.dev/flutter/widgets/FutureBuilder-class.html

custom-widget.dart
Concept Taught: Creating a highly reusable, opinionated custom StatelessWidget

Documentation Focus: docs.flutter.dev/development/ui/widgets-intro (Building custom widgets)