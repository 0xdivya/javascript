# JavaScript Data Types & Syntax Standards

This guide covers core fundamental JavaScript concepts, data types, best syntax practices, and common interview questions based on standard JavaScript behavior.

---

## Code Syntax & Strict Mode

### 1. `"use strict";`

* Treats all JavaScript code as a newer version (ES6+ standard).
* Prevents silent errors, disables unsafe actions (such as undeclared variable assignments), and ensures cleaner code execution.

### 2. Code Readability

```javascript
// ❌ Poor Readability
console.log(3
    +
    3
)

// ✅ Recommended
console.log(3 + 3);

```

Code readability should always be high. Avoid unnecessary line breaks inside simple math expressions or function calls.

### 3. Browser-Specific APIs (`alert`)

```javascript
// alert("hello");

```

`alert()` works natively inside browser environments. In server-side environments like **Node.js**, `alert()` is not available and will throw a `ReferenceError`.

---

## Data Types in JavaScript

JavaScript is a **dynamically typed language**, meaning variable types are determined automatically at runtime. Data types are broadly categorized into **Primitive** and **Non-Primitive (Reference)** types.

```
                  ┌───────────────────────────────┐
                  │      JavaScript Data Types    │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
┌──────────────────┐                              ┌──────────────────┐
│  Primitive Types │                              │ Non-Primitive    │
│  (Passed by Value)                             │ (Passed by Ref)  │
└────────┬─────────┘                              └────────┬─────────┘
         │                                                 │
         ├── Number (up to 2⁵³ - 1)                        └── Objects
         ├── BigInt (larger integers)                          ├── Plain Objects
         ├── String                                            ├── Arrays
         ├── Boolean                                           └── Functions
         ├── Null (standalone empty value)
         ├── Undefined (value not assigned)
         └── Symbol (unique identifier)

```

---

### Primitive Data Types (Passed by Value)

#### 1. Number

Used for both integer and floating-point values.

* **Safe Range:** $-(2^{53} - 1)$ to $(2^{53} - 1)$ (i.e., `-9007199254740991` to `9007199254740991`).

```javascript
let number = 2 ** 53 - 1; // 9007199254740991
console.log(number);

```

#### 2. BigInt

Used for arbitrary-precision integers that exceed the safe limit of the `Number` type. Appending `n` at the end of an integer creates a `BigInt`.

```javascript
let bigNumber = 2 ** 53n - 1n; // 9007199254740991n
console.log(bigNumber);

```

#### 3. String

Represents textual data wrapped in single quotes `''`, double quotes `""`, or template literals ` `.

```javascript
let string = "hello world";
console.log(string);

```

#### 4. Boolean

Represents logical values: `true` or `false`.

```javascript
let isLoggedIn = true;
console.log(isLoggedIn);

```

#### 5. Null

A standalone value that represents an explicit intentional absence of any object value (empty value).

```javascript
let nullVar = null;
console.log(nullVar);

```

#### 6. Undefined

Indicates that a variable has been declared but has not yet been assigned a value.

```javascript
let undefinedVar = undefined;
console.log(undefinedVar);

```

#### 7. Symbol

Used to create completely unique and immutable primitive values, often used as unique object keys.

```javascript
let symbolVar = Symbol('hello');
console.log(symbolVar);

```

---

### Non-Primitive (Reference) Data Types

#### Object

Collection of key-value pairs. Arrays and functions are also special types of objects in JavaScript.

```javascript
const user = {
    name: "divya",
    age: 20
};

```

---

## Identifying Types using `typeof`

The `typeof` operator returns a string indicating the type of the unevaluated operand.

```javascript
console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"

```

---

## 🎯 Important Interview Questions & Answers

### Q1: Why does `typeof null` return `"object"`?

**Answer:** This is a legacy bug in the first implementation of JavaScript. In early versions, values were represented as type tags along with the value payload. The object type tag was `000`, and `null` was represented as a null pointer (all zeros), which caused `typeof` to mistakenly classify it as an object. It is preserved for backward compatibility.

---

### Q2: What is the difference between `null` and `undefined`?

* **`undefined`:** Means a variable has been declared, but no value has been assigned to it yet. JavaScript automatically sets uninitialized variables to `undefined`.
* **`null`:** Is an explicit assignment given by a developer to represent an intentionally "empty" or "no value" state.

---

### Q3: What is the difference between Primitive and Non-Primitive data types?

| Feature | Primitive Types | Non-Primitive (Reference) Types |
| --- | --- | --- |
| **Storage** | Stored directly in Stack memory | Stored in Heap memory; stack stores the reference |
| **Mutability** | Immutable (cannot be altered in place) | Mutable (can be modified after creation) |
| **Copying Behavior** | Copied by **value** | Copied by **reference** |
| **Examples** | `Number`, `String`, `Boolean`, `Null`, `Undefined`, `BigInt`, `Symbol` | `Object`, `Array`, `Function` |

---

### Q4: Why can't we mix `BigInt` and standard `Number` in math operations?

**Answer:** JavaScript does not allow implicit type coercion between `BigInt` and `Number` to prevent accidental loss of precision. Converting a `BigInt` to a standard `Number` could drop digits beyond $2^{53} - 1$. You must explicitly convert types before arithmetic operations.

```javascript
// ❌ TypeError: Cannot mix BigInt and other types
// let result = 10n + 5; 

// ✅ Correct Way
let result = 10n + BigInt(5); // 15n

```