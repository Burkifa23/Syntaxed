## Concept: Dart Streams (Asynchronous Data Sequences)

**Category: Dart Advanced Concepts**
**Target Documentation:** [https://dart.dev/language/async#streams](https://dart.dev/language/async#streams)

### Description
A **Stream** is a sequence of asynchronous events (data or errors) over time. Unlike a **Future**, which returns a single value eventually, a Stream can deliver **zero or more values** over its lifetime. Streams are crucial for handling ongoing data flows, such as user gestures, database changes (live updates from Supabase), or server-side events.

### Code Explanation

1. **Stream Creation (`async*` and `yield`)**
   A function marked with **`async*`** (pronounced "async star") is a **Stream generator**. Instead of returning a value or a `Future`, it uses the **`yield`** keyword to send data (events) into the Stream sequentially. This makes creating streams of data very clean and readable.

2. **Stream Consumption (Iterating with `await for`)**
   The most common and clean way to consume a Stream in an `async` function is the **`await for`** loop.
   * **Mechanism:** It iterates over the events in the stream. Execution of the `async` function pauses until the next event arrives, similar to how `await` works for a `Future`.

3. **Stream Manipulation (`.map()`)**
   Streams can be transformed using methods similar to those on a `List`. The `.map()` method transforms each data event as it passes through the stream, creating a new, transformed stream without modifying the original.

4. **Stream Consumption (Subscription with `.listen()`)**
   The traditional way to consume a stream is by calling the **`.listen()`** method, which creates a subscription.
   * **`onData`**: A callback executed every time a new value arrives.
   * **`onError`**: A callback executed if an error occurs.
   * **`onDone`**: A callback executed when the stream finishes emitting values and closes.
   * **Note:** The `listen()` approach is more common in Flutter UI code (e.g., in a `StreamBuilder` widget) where you attach callbacks to update the UI.