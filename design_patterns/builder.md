# Builder Pattern

The builder pattern is a creational pattern.

Imagine a hot dog stand where when the customer places an order they need to tell you everything they want in the sandwich in the constructor.

This makes it hard to keep track of all of the options when calling the constructor.

It may be easier to defer each step to a later point.

The builder pattern creates the object step by step suing methods rather than in the constructor.

The individual methods will set a property on the object and return the object. This allows for method chaining.

This pattern was used heavily in frameworks like jQuery but has fallen out of style recently.