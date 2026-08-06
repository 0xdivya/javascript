# JavaScript Strings & String Methods

This guide covers JavaScript strings, primitive string values versus `String` wrapper objects, prototype methods, string immutability, and MDN-style documentation for string manipulation methods.

---

## 1. String Creation: Primitive vs. Object Wrapper

In JavaScript, strings can be created as **primitive literals** or as **`String` objects** using the `new` keyword constructor.

```javascript
// 1. Primitive String (Preferred)
const name = "Divya";
const repoCount = 50;

// 2. String Object (Using String Constructor)
const gameName = new String('hitesh-hc-com');

```

```
                             ┌───────────────────────────────┐
                             │       String Creation         │
                             └───────────────┬───────────────┘
                                             │
         ┌───────────────────────────────────┴───────────────────────────────────┐
         ▼                                                                       ▼
┌────────────────────────────────┐                               ┌────────────────────────────────┐
│ Primitive String               │                               │ String Object (`new String()`) │
├────────────────────────────────┤                               ├────────────────────────────────┤
│ Type: "string"                 │                               │ Type: "object"                 │
│ Stored in Stack memory         │                               │ Stored in Heap memory          │
│ Lightweight & fast             │                               │ Wraps primitive with key-value  │
│ e.g., "Divya"                  │                               │ index properties (0: "h"...)   │
└────────────────────────────────┘                               └────────────────────────────────┘

```

### Browser Console Inspection

When inspecting `new String('hitesh-hc-com')` in the developer tools console:

* It displays as an object containing key-value index pairs: `{ 0: "h", 1: "i", 2: "t", ..., length: 13 }`.
* **`<primitive value>`**: Stores the underlying raw primitive string `"hitesh-hc-com"`.
* **`<prototype>: String`**: Contains all built-in methods provided by `String.prototype`.

---

## 2. String Interpolation (Template Literals)

Template literals use backticks (```) instead of quotes (`""` or `''`) and allow embedded expressions via `${expression}` syntax.

```javascript
// Modern String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: "Hello my name is Divya and my repo count is 50"

```

### Why use Template Literals over Concatenation?

* **Readability:** Eliminates messy string joining with `+` operators.
* **Expression Evaluation:** Supports inline mathematical operations and function calls (e.g., `${repoCount + 10}`).
* **Multi-line Support:** Preserves line breaks without using `\n`.

---

## 3. String Immutability

JavaScript strings are **immutable**. Once created, their individual characters cannot be altered in place.

```javascript
let str = "Hello";
str[0] = "J"; // ❌ Does not throw an error in non-strict mode, but silently fails
console.log(str); // Output: "Hello"

```

> **Note:** Every string method returns a **new string** rather than modifying the original string in place.

---

## 4. String Properties

### `.length`

Returns the total number of UTF-16 code units (characters) in the string.

* **Syntax:** `string.length`
* **Example:**
```javascript
console.log(gameName.length); // 13

```



### `.__proto__`

Provides access to the prototype object (`String.prototype`), which holds all built-in string methods.

* **Example:**
```javascript
console.log(gameName.__proto__); // Returns the String prototype object

```



---

## 5. Comprehensive String Methods (MDN Style)

### A. Character Access & Indexing

#### 1. `charAt(index)`

Returns the character at the specified `index`. If `index` is out of bounds, it returns an empty string `""`.

* **Syntax:** `str.charAt(index)`
* **Example:**
```javascript
console.log(gameName.charAt(0)); // "h"

```



#### 2. Bracket Notation `[index]`

Allows direct array-like property access to access characters by index.

* **Example:**
```javascript
console.log(gameName[0]); // "h"

```



---

### B. Searching & Location Methods

#### 1. `indexOf(searchValue, fromIndex)`

Returns the index of the **first occurrence** of `searchValue`. Returns `-1` if not found.

* **Syntax:** `str.indexOf(searchValue, [fromIndex])`
* **Example:**
```javascript
console.log(gameName.indexOf('h')); // 0

```



#### 2. `includes(searchString, position)`

Determines whether a string contains the characters of a specified string, returning `true` or `false`.

* **Syntax:** `str.includes(searchString, [position])`
* **Example:**
```javascript
const url = "https://divya.com/hello.html";

console.log(url.includes("divya")); // true
url.includes("divya") ? console.log("yes") : console.log("no"); // "yes"

```



---

### C. Extraction & Substring Methods

#### 1. `substring(indexStart, indexEnd)`

Extracts characters from `indexStart` up to (but not including) `indexEnd`.

* If `indexStart > indexEnd`, `substring()` swaps the two arguments.
* Negative arguments are treated as `0`.
* **Syntax:** `str.substring(indexStart, indexEnd)`
* **Example:**
```javascript
const newString = gameName.substring(0, 4);
console.log(newString); // "hite"

```



#### 2. `slice(indexStart, indexEnd)`

Extracts a section of a string and returns it as a new string, without modifying the original string.

* Accepts **negative indexes**, which count backward from the end of the string (`-1` refers to the last character).
* **Syntax:** `str.slice(indexStart, indexEnd)`
* **Example:**
```javascript
// Extracts from index 5 (-8 from end of 'hitesh-hc-com') to index 4 -> returns ""
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // ""

// Valid negative slicing example:
console.log(gameName.slice(-6)); // "hc-com"

```



---

### D. Case Conversion Methods

#### 1. `toUpperCase()`

Returns the calling string value converted to uppercase.

* **Syntax:** `str.toUpperCase()`
* **Example:**
```javascript
console.log(gameName.toUpperCase()); // "HITESH-HC-COM"

```



#### 2. `toLowerCase()`

Returns the calling string value converted to lowercase.

* **Syntax:** `str.toLowerCase()`
* **Example:**
```javascript
console.log(gameName.toLowerCase()); // "hitesh-hc-com"

```



---

### E. Whitespace Management

#### 1. `trim()`

Removes whitespace from both ends of a string (spaces, tabs, non-breaking spaces, and line terminators).

* **Syntax:** `str.trim()`
* **Example:**
```javascript
const newStringOne = "    divya    ";
console.log(newStringOne);        // "    divya    "
console.log(newStringOne.trim()); // "divya"

```



#### Related Variants:

* **`trimStart()` / `trimLeft()**`: Removes whitespace from the beginning of a string.
* **`trimEnd()` / `trimRight()**`: Removes whitespace from the end of a string.

---

### F. Modification & Transformation Methods

#### 1. `replace(pattern, replacement)`

Searches a string for a specified value or regular expression and returns a new string with the **first occurrence** replaced.

* **Syntax:** `str.replace(pattern, replacement)`
* **Example:**
```javascript
const url = "https://divya.com/hello.html";
console.log(url.replace("https", "http")); // "http://divya.com/hello.html"

```



> **Note:** To replace all occurrences, use `replaceAll()` or a global regular expression (`/pattern/g`).

#### 2. `split(separator, limit)`

Splits a string into an ordered list of substrings based on a pattern (`separator`), places these substrings into an array, and returns the array.

* **Syntax:** `str.split(separator, [limit])`
* **Example:**
```javascript
// Splits 'hitesh-hc-com' by '-'
console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ]

```



---

## 6. `substring()` vs. `slice()` Comparison Table

| Feature | `substring(start, end)` | `slice(start, end)` |
| --- | --- | --- |
| **Negative Indexes** | Treats negative numbers as `0` | Counts backward from the end of string |
| **Argument Swapping** | Swaps arguments if `start > end` | Returns an empty string `""` if `start > end` |
| **Out-of-Bounds** | Clamps values to `0` and `length` | Clamps values to string bounds |
| **Recommended Usage** | Simple index-based slicing | Advanced slicing requiring negative offsets |

---

## 🎯 Important Interview Questions & Answers

### Q1: What is the difference between `const s = "hello"` and `const s = new String("hello")`?

**Answer:**

* `typeof "hello"` evaluates to `"string"` (primitive).
* `typeof new String("hello")` evaluates to `"object"` (wrapper object).
* `s1 === s2` returns `false` due to differing types and memory storage references.

---

### Q2: Why can we call methods like `.toUpperCase()` on primitive strings if they aren't objects?

**Answer:** JavaScript uses **Auto-boxing** (primitive wrapper objects). When a method is called on a primitive string, JavaScript temporarily wraps the primitive in a `String` object, executes the prototype method, returns the result, and immediately discards the temporary wrapper object.

---

### Q3: How do `slice()` and `substring()` handle negative numbers differently?

**Answer:**

* `substring(-3)` converts `-3` to `0` and extracts from index `0`.
* `slice(-3)` extracts the last 3 characters of the string.

