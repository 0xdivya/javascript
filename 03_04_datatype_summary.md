# JavaScript Data Types, Memory Allocation & Type System

This guide covers JavaScript's data type classification, dynamic type system, memory allocation mechanisms (Stack vs. Heap), the `typeof` operator behavior, and why non-primitive types evaluate to objects.

---

## 1. Is JavaScript Dynamically or Statically Typed?

JavaScript is a **dynamically typed** and **weakly typed** language.

```
                           ┌──────────────────────────────────────────┐
                           │            JavaScript Type System        │
                           └────────────────────┬─────────────────────┘
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 ▼                                                             ▼
  ┌──────────────────────────────┐                             ┌──────────────────────────────┐
  │ Dynamically Typed            │                             │ Weakly Typed                 │
  ├──────────────────────────────┤                             ├──────────────────────────────┤
  │ Variable types are checked   │                             │ Performs implicit type       │
  │ at runtime. Variables hold   │                             │ coercion during operations   │
  │ values, not strict types.    │                             │ (e.g., '5' + 2 = '52').      │
  └──────────────────────────────┘                             └──────────────────────────────┘

```

### Dynamic Typing Explained

* **Runtime Resolution:** You do not need to explicitly declare variable types (e.g., `int x = 10` in C++/Java). The type is automatically inferred at runtime based on the assigned value.
* **Re-assignability:** A variable can hold a `Number` initially and later be reassigned a `String` without throwing a compile-time error.

```javascript
let data = 100;    // Currently a Number
data = "Hello";    // Reassigned to String (Valid in JS)

```

---

## 2. Primitive vs. Non-Primitive (Reference) Data Types

JavaScript categorizes data types into **2 main groups** based on how they are stored in memory and accessed.

```
                                  ┌───────────────────────────────┐
                                  │     JavaScript Data Types     │
                                  └───────────────┬───────────────┘
                                                  │
         ┌────────────────────────────────────────┴────────────────────────────────────────┐
         ▼                                                                                 ▼
┌─────────────────────────────────┐                               ┌─────────────────────────────────┐
│ Primitive Types (7)             │                               │ Non-Primitive / Reference (3)   │
│ Stored in STACK (Call by Value) │                               │ Stored in HEAP (Call by Ref)    │
└────────────────┬────────────────┘                               └────────────────┬────────────────┘
                 │                                                                 │
                 ├── Number                                                        ├── Object
                 ├── String                                                        ├── Array
                 ├── Boolean                                                       └── Function
                 ├── Null
                 ├── Undefined
                 ├── Symbol
                 └── BigInt

```

### A. Primitive Types (7 Types)

Primitives are immutable (their raw values cannot be modified) and are **stored directly in Stack Memory**. Operations on primitive variables operate on a **copy of their value** (Call by Value).

1. **Number:** Represents integer and floating-point values (up to $2^{53} - 1$).
2. **String:** Sequence of characters wrapped in quotes.
3. **Boolean:** Logical values: `true` or `false`.
4. **Null:** Intentional absence of any value (standalone empty value).
5. **Undefined:** Variable declared but not assigned a value.
6. **Symbol:** Unique and immutable identifier used primarily for object property keys.
7. **BigInt:** Large integers beyond the safe limit of the `Number` type (denoted by `n` suffix).

### B. Non-Primitive Types (Reference Types)

Non-primitives are mutable and **stored in Heap Memory**. Variables do not contain the actual object data; instead, they store a **memory reference (address)** pointing to the object in the Heap (Call by Reference).

1. **Object:** Key-value pairs enclosed in `{}`.
2. **Array:** Ordered list of values enclosed in `[]`.
3. **Function:** Executable code block / Callable object.

---

## 3. Standard `typeof` Reference Table

The `typeof` operator returns a string representing the evaluation type of an operand (based on the official MDN specification).

| Data Type | Example Code | `typeof` Output | Category | Memory Storage |
| --- | --- | --- | --- | --- |
| **Number** | `100` or `100.3` | `"number"` | Primitive | Stack |
| **String** | `"divya"` | `"string"` | Primitive | Stack |
| **Boolean** | `true` | `"boolean"` | Primitive | Stack |
| **Undefined** | `let x;` | `"undefined"` | Primitive | Stack |
| **Null** | `null` | `"object"` *(JS Legacy Bug)* | Primitive | Stack |
| **Symbol** | `Symbol('123')` | `"symbol"` | Primitive | Stack |
| **BigInt** | `100n` | `"bigint"` | Primitive | Stack |
| **Object** | `{ name: 'shaktiman' }` | `"object"` | Non-Primitive | Heap |
| **Array** | `['a', 'b', 'c']` | `"object"` | Non-Primitive | Heap |
| **Function** | `function(){}` | `"function"` | Non-Primitive | Heap |

---

## 4. Why Do Non-Primitives Return `"object"`?

In JavaScript, **almost all non-primitive structures are fundamentally Objects under the hood**.

### 1. Arrays are Specialized Objects

An Array in JavaScript is an Object whose keys are auto-incremented numerical indexes (`0, 1, 2...`), and it inherits methods from `Array.prototype` which inherits from `Object.prototype`.

```javascript
const heros = ['shaktiman', 'naagraj'];

// Internally represented like an object:
// { 0: 'shaktiman', 1: 'naagraj', length: 2 }

console.log(typeof heros); // "object"

```

### 2. Functions are Callable Objects

Functions in JavaScript are special objects known as **Callable Objects**. They possess an internal algorithm called `[[Call]]`, allowing them to be invoked, while still behaving like objects (e.g., properties can be attached to functions).

* The `typeof` operator specifically returns `"function"` for callable objects as a convenient utility, even though functions inherit from `Object.prototype`.

```javascript
const myFunction = function() {
    console.log("hello world");
};

myFunction.customProperty = "Functions can hold properties!";
console.log(typeof myFunction); // "function"

```

### 3. The `typeof null === "object"` Historical Bug

In the initial version of JavaScript (1995), values were stored in 32-bit units composed of a **type tag** and the value payload.

* The type tag for Objects was `000`.
* `null` represented a NULL pointer (`0x00` in C/C++), consisting of all zeros.
* Because its type tag was `000`, `typeof null` incorrectly returned `"object"`. This bug remains uncorrected to prevent breaking legacy web code.

---

## 5. Code Example Walkthrough

```javascript
// Primitive declarations
const scroll = 100;               // Number
const score = 100.3;              // Number
const isLooking = true;           // Boolean
const outside = null;             // Null
let userEmail;                    // Undefined

// Symbol Uniqueness
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);     // false (Symbols are guaranteed unique)

// BigInt declaration
const bigNumber = 1234567890123456789012345678901234567890n;

// Non-Primitive declarations
const heros = ['shaktiman', 'naagraj', 'doga', 'batman']; // Array

let myObj = {
    name: 'shaktiman',
    age: 30,
};                                // Object

const myFunction = function() {
    console.log("hello world");    // Function
};

```

---

## 🎯 Important Interview Questions & Answers

### Q1: What is the difference between Dynamically Typed and Weakly Typed languages?

* **Dynamically Typed:** Variable types are checked at **runtime**, not compile-time. You do not explicitly write types in variable declarations.
* **Weakly Typed:** The language engine performs **implicit type coercion** during operations across different types (e.g., `'5' - 1` converts string `'5'` to number `5` automatically).

---

### Q2: Why does `Symbol('123') === Symbol('123')` return `false`?

**Answer:** The `Symbol()` function creates a **guaranteed unique primitive value** every time it is invoked. Even if identical string descriptions are passed, each `Symbol` points to a distinct internal identifier to prevent property key collisions in objects.

---

### Q3: Since `typeof []` returns `"object"`, how can you reliably check if a variable is an Array?

**Answer:** Use `Array.isArray()` or `instanceof Array`:

```javascript
const heros = ['shaktiman', 'naagraj'];

console.log(Array.isArray(heros)); // true
console.log(heros instanceof Array); // true

```

---

### Q4: Explain Stack vs. Heap memory allocation in JavaScript.

**Answer:**

* **Stack Memory (Primitive Types):** Fast, ordered execution memory. Stores values directly. When a primitive variable is assigned to another, a **complete copy** of the value is created.
* **Heap Memory (Non-Primitive Types):** Unstructured memory used for dynamic objects. The Stack stores a reference address that points to the object in the Heap. When assigned to another variable, only the **reference address** is copied.

```javascript
// Stack Memory Copy (Call by Value)
let name1 = "divya";
let name2 = name1; 
name2 = "rahul"; 
console.log(name1); // "divya" (Unchanged)

// Heap Memory Reference (Call by Reference)
let user1 = { name: "divya" };
let user2 = user1;
user2.name = "rahul";
console.log(user1.name); // "rahul" (Changed! Both variables share the same Heap reference)

```