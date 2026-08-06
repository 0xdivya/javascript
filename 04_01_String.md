# Remaining JavaScript String Methods (MDN Reference)

This document covers all the remaining methods found on `String.prototype` (as seen in the browser developer tools console), categorized by utility, along with simple English explanations, code examples, and interview notes.

---

## 1. Character Code & Position Methods

### `at(index)`

Returns the character at the specified `index`. Unlike `charAt()`, `at()` supports **negative integers** to count backward from the end of the string.

* **Syntax:** `str.at(index)`
* **Example:**
```javascript
const str = "JavaScript";
console.log(str.at(0));  // "J"
console.log(str.at(-1)); // "t" (Last character)

```



### `charCodeAt(index)`

Returns an integer between `0` and `65535` representing the UTF-16 code unit at the given `index`.

* **Syntax:** `str.charCodeAt(index)`
* **Example:**
```javascript
const str = "ABC";
console.log(str.charCodeAt(0)); // 65 (ASCII/UTF-16 code for 'A')

```



### `codePointAt(index)`

Returns a non-negative integer that is the Unicode code point value at the given `index`. Useful for characters represented by surrogate pairs (like emojis).

* **Syntax:** `str.codePointAt(index)`
* **Example:**
```javascript
const emoji = "😀";
console.log(emoji.codePointAt(0)); // 128512

```



---

## 2. Advanced Searching & Matching Methods

### `startsWith(searchString, position)`

Determines whether a string begins with the characters of a specified string, returning `true` or `false`.

* **Syntax:** `str.startsWith(searchString, [position])`
* **Example:**
```javascript
const filename = "01_variables.js";
console.log(filename.startsWith("01")); // true

```



### `endsWith(searchString, length)`

Determines whether a string ends with the characters of a specified string, returning `true` or `false`.

* **Syntax:** `str.endsWith(searchString, [length])`
* **Example:**
```javascript
const filename = "notes.md";
console.log(filename.endsWith(".md")); // true

```



### `lastIndexOf(searchValue, fromIndex)`

Returns the index of the **last occurrence** of the specified substring, searching backward from `fromIndex`. Returns `-1` if not found.

* **Syntax:** `str.lastIndexOf(searchValue, [fromIndex])`
* **Example:**
```javascript
const text = "hello world, hello universe";
console.log(text.lastIndexOf("hello")); // 13

```



### `search(regexp)`

Executes a search for a match between a Regular Expression and the string. Returns the index of the first match, or `-1` if not found.

* **Syntax:** `str.search(regexp)`
* **Example:**
```javascript
const text = "User ID: 10452";
console.log(text.search(/\d+/)); // 9 (Index where numbers start)

```



### `match(regexp)`

Retrieves the result of matching a string against a Regular Expression. Returns an `Array` of matches or `null`.

* **Syntax:** `str.match(regexp)`
* **Example:**
```javascript
const text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g)); // [ "ain", "ain", "ain" ]

```



### `matchAll(regexp)`

Returns an iterator of all results matching a string against a Regular Expression, including capturing groups.

* **Syntax:** `str.matchAll(regexp)`
* **Example:**
```javascript
const text = "test1 test2";
const matches = [...text.matchAll(/test(\d)/g)];
console.log(matches[0][1]); // "1"

```



---

## 3. String Manipulation & Formatting

### `concat(str1, str2, ...)`

Combines two or more strings together and returns a new string.
*(Note: Performance-wise, using `+` or template literals is preferred over `concat()`)*.

* **Syntax:** `str.concat(string2, string3, ...)`
* **Example:**
```javascript
const a = "Hello";
const b = "World";
console.log(a.concat(" ", b)); // "Hello World"

```



### `replaceAll(pattern, replacement)`

Returns a new string where **all** occurrences of a pattern are replaced by a replacement.

* **Syntax:** `str.replaceAll(pattern, replacement)`
* **Example:**
```javascript
const text = "cats, cats, cats";
console.log(text.replaceAll("cats", "dogs")); // "dogs, dogs, dogs"

```



### `padStart(targetLength, padString)`

Pads the current string from the **start** with a given string until it reaches the `targetLength`.

* **Syntax:** `str.padStart(targetLength, [padString])`
* **Example:**
```javascript
const accountNumber = "532";
console.log(accountNumber.padStart(6, "0")); // "000532"

```



### `padEnd(targetLength, padString)`

Pads the current string from the **end** with a given string until it reaches the `targetLength`.

* **Syntax:** `str.padEnd(targetLength, [padString])`
* **Example:**
```javascript
const text = "Loading";
console.log(text.padEnd(10, ".")); // "Loading..."

```



### `repeat(count)`

Returns a new string containing the specified number of copies of the string concatenated together.

* **Syntax:** `str.repeat(count)`
* **Example:**
```javascript
console.log("Ha!".repeat(3)); // "Ha!Ha!Ha!"

```



### `trimStart()` / `trimLeft()` & `trimEnd()` / `trimRight()`

* **`trimStart()`**: Removes whitespace from the beginning of a string.
* **`trimEnd()`**: Removes whitespace from the end of a string.
* **Example:**
```javascript
const str = "   hello   ";
console.log(str.trimStart()); // "hello   "
console.log(str.trimEnd());   // "   hello"

```



---

## 4. Encoding, Utility & String Iteration

### `localeCompare(compareString)`

Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order according to language rules.

* **Syntax:** `referenceStr.localeCompare(compareString)`
* **Example:**
```javascript
console.log("a".localeCompare("b")); // -1 ("a" comes before "b")
console.log("b".localeCompare("a")); // 1

```



### `normalize(form)`

Returns the Unicode Normalization Form of the string (useful when processing strings with accents or special combined character sets).

* **Syntax:** `str.normalize([form])`
* **Example:**
```javascript
const str = "\u0041\u030A"; // "Å" composed of two code units
console.log(str.normalize()); // "Å"

```



### `isWellFormed()` & `toWellFormed()`

* **`isWellFormed()`**: Checks if a string contains lone surrogates (malformed UTF-16 strings).
* **`toWellFormed()`**: Replaces lone surrogates with the replacement character `U+FFFD`.
* **Example:**
```javascript
const valid = "abc";
console.log(valid.isWellFormed()); // true

```



### `toString()` & `valueOf()`

Both methods return the primitive string value of a `String` object.

* **Example:**
```javascript
const strObj = new String("Divya");
console.log(strObj.toString()); // "Divya" (Primitive)
console.log(strObj.valueOf());  // "Divya" (Primitive)

```



### `Symbol.iterator`

Enables strings to be iterated using `for...of` loops or spread into arrays using `[...]`.

* **Example:**
```javascript
const str = "Code";
const charArray = [...str];
console.log(charArray); // [ "C", "o", "d", "e" ]

```



---

## 5. Deprecated & Legacy HTML Methods

In the early days of JavaScript (1990s), special wrapper methods were created to generate HTML strings directly. These are **deprecated and strongly discouraged** in modern development.

| Deprecated Method | Returned HTML Output | Modern Replacement |
| --- | --- | --- |
| `anchor("name")` | `<a name="name">str</a>` | Use Template Literals or DOM API |
| `big()` | `<big>str</big>` | Use CSS `font-size` |
| `blink()` | `<blink>str</blink>` | Use CSS animations |
| `bold()` | `<b>str</b>` | Use CSS `font-weight: bold` |
| `fixed()` | `<tt>str</tt>` | Use CSS `font-family: monospace` |
| `fontcolor("red")` | `<font color="red">str</font>` | Use CSS `color` |
| `fontsize(5)` | `<font size="5">str</font>` | Use CSS `font-size` |
| `italics()` | `<i>str</i>` | Use CSS `font-style: italic` |
| `link("url")` | `<a href="url">str</a>` | Use Template Literals or DOM API |
| `small()` | `<small>str</small>` | Use CSS `font-size` |
| `strike()` | `<strike>str</strike>` | Use CSS `text-decoration: line-through` |
| `sub()` | `<sub>str</sub>` | Use CSS `vertical-align: sub` |
| `sup()` | `<sup>str</sup>` | Use CSS `vertical-align: super` |
| `substr(start, length)` | Extracts substring by length | **Deprecated:** Use `slice()` or `substring()` |

---

## 🎯 Interview Questions Regarding String Prototype

### Q1: Why are HTML methods like `.bold()` or `.link()` visible in the browser prototype console?

**Answer:** They exist purely for **backward compatibility** with websites created in the 1990s. The ECMAScript specification preserves them as "Annex B" web-legacy features so old websites do not break.

### Q2: What is the difference between `substr()` and `substring()`?

**Answer:**

* `substr(start, length)`: Second argument specifies the **number of characters** to extract. *(Deprecated)*.
* `substring(start, end)`: Second argument specifies the **ending index** (non-inclusive). *(Modern Standard)*.

### Q3: How does `at(-1)` differ from `charAt(-1)`?

**Answer:**

* `at(-1)` accepts negative values and returns the last character of the string.
* `charAt(-1)` converts negative indexes to out-of-bounds positions and returns an empty string `""`.