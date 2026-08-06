# JavaScript Numbers and Math Object

This guide covers JavaScript's `Number` type, primitive vs. object wrapper representations, number formatting methods, number constants, and the global static `Math` object, including random range generation and common interview edge cases.

---

## 1. Numbers: Primitive Literals vs. Object Wrapper

In JavaScript, numbers can be defined as primitive literals or instantiated as wrapper objects using the `Number` constructor.

```javascript
// 1. Primitive Number (Recommended)
const score = 400;

// 2. Number Object Wrapper
const balance = new Number(100);

console.log(typeof score);   // "number"
console.log(typeof balance); // "object"

```

```
                          ┌───────────────────────────────┐
                          │       Number Creation         │
                          └───────────────┬───────────────┘
                                          │
        ┌─────────────────────────────────┴─────────────────────────────────┐
        ▼                                                                   ▼
┌──────────────────────────────┐                           ┌──────────────────────────────┐
│ Primitive Number             │                           │ Number Object (`new Number`) │
├──────────────────────────────┤                           ├──────────────────────────────┤
│ Type: "number"               │                           │ Type: "object"               │
│ Stored in Stack memory       │                           │ Stored in Heap memory        │
│ Lightweight & fast           │                           │ Wraps primitive inside an     │
│ e.g., 400                    │                           │ object container             │
└──────────────────────────────┘                           └──────────────────────────────┘

```

> **Auto-boxing:** When you call a method on a primitive number (e.g., `score.toString()`), JavaScript temporarily converts the primitive into a `Number` object behind the scenes, executes the method, and discards the temporary object.

---

## 2. Number Instance Methods

Instance methods format, convert, or transform numeric values into strings or desired formats.

### A. `.toString(radix)`

Converts a number to a string representation. Accepts an optional `radix` (base) argument ranging from 2 to 36.

* **Syntax:** `num.toString([radix])`
* **Example:**
```javascript
const balance = new Number(100);
const str = balance.toString();

console.log(str);        // "100"
console.log(str.length); // 3 (Accessing string property)
console.log((255).toString(16)); // "ff" (Hexadecimal representation)

```



### B. `.toFixed(digits)`

Formats a number using fixed-point notation with a specified number of digits after the decimal point. Returns a string.

* **Syntax:** `num.toFixed([digits])`
* **Example:**
```javascript
console.log(balance.toFixed(2)); // "100.00"

const num = 5.6789;
console.log(num.toFixed(2));     // "5.68" (Rounds automatically)

```



### C. `.toPrecision(precision)`

Formats a number to a specified **total count of significant digits** (both before and after the decimal point). Returns a string.

* **Syntax:** `num.toPrecision([precision])`
* **Example:**
```javascript
const otherBalance = 100.8345;

console.log(otherBalance.toPrecision(3)); // "101"
console.log(otherBalance.toPrecision(4)); // "100.8"
console.log(otherBalance.toPrecision(2)); // "1.0e+2" (Exponential notation if precision < integer length)

```



### D. `.toLocaleString(locales, options)`

Returns a string with a language-sensitive representation of the number (e.g., adding comma separators according to regional numbering systems).

* **Syntax:** `num.toLocaleString([locales], [options])`
* **Example:**
```javascript
const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-US")); // "1,000,000" (US System: Millions)
console.log(hundreds.toLocaleString("en-IN")); // "10,000,000" (Indian System: Lakhs/Crores)

// Formatting as Currency
console.log(hundreds.toLocaleString("en-IN", { style: "currency", currency: "INR" }));
// "₹10,000,000.00"

```



### E. `.toExponential(fractionDigits)`

Returns a string representing the number in exponential (scientific) notation.

* **Syntax:** `num.toExponential([fractionDigits])`
* **Example:**
```javascript
const val = 123456;
console.log(val.toExponential(2)); // "1.23e+5"

```



### F. `.valueOf()`

Returns the primitive value of a `Number` object.

* **Syntax:** `num.valueOf()`
* **Example:**
```javascript
const numObj = new Number(42);
console.log(numObj.valueOf()); // 42 (Primitive number)

```



---

## 3. Static Number Properties & Utility Methods

Static methods and constants are accessed directly via the `Number` global object (e.g., `Number.isInteger()`).

### Static Utility Methods

| Method | Description | Example |
| --- | --- | --- |
| `Number.isInteger(val)` | Checks whether the passed value is an integer. | `Number.isInteger(10)` $\rightarrow$ `true` |
| `Number.isNaN(val)` | Checks whether the passed value is strictly `NaN`. | `Number.isNaN(NaN)` $\rightarrow$ `true` |
| `Number.isFinite(val)` | Checks whether the value is a finite number. | `Number.isFinite(Infinity)` $\rightarrow$ `false` |
| `Number.isSafeInteger(val)` | Checks if value is within safe integer range. | `Number.isSafeInteger(2**53 - 1)` $\rightarrow$ `true` |
| `Number.parseInt(str)` | Parses a string argument and returns an integer. | `Number.parseInt("42px")` $\rightarrow$ `42` |
| `Number.parseFloat(str)` | Parses a string argument and returns a float. | `Number.parseFloat("42.50px")` $\rightarrow$ `42.5` |

### Static Constants

| Constant | Description | Value |
| --- | --- | --- |
| `Number.MAX_VALUE` | Largest positive representable number | $\approx 1.7976931348623157 \times 10^{308}$ |
| `Number.MIN_VALUE` | Smallest positive representable number closest to zero | $\approx 5 \times 10^{-324}$ |
| `Number.MAX_SAFE_INTEGER` | Maximum safe integer in JS ($2^{53} - 1$) | `9007199254740991` |
| `Number.MIN_SAFE_INTEGER` | Minimum safe integer in JS ($-(2^{53} - 1)$) | `-9007199254740991` |
| `Number.POSITIVE_INFINITY` | Value representing positive infinity | `Infinity` |
| `Number.NEGATIVE_INFINITY` | Value representing negative infinity | `-Infinity` |
| `Number.NaN` | Special "Not-a-Number" value | `NaN` |
| `Number.EPSILON` | Difference between 1 and the smallest floating point number $> 1$ | $\approx 2.220446049250313 \times 10^{-16}$ |

---

## 4. The `Math` Object

The `Math` object is a **built-in static namespace object**. It cannot be instantiated using `new Math()` or invoked as a function. All its properties and methods are static.

```javascript
console.log(Math); // Math object containing built-in static properties & methods

```

---

### A. Mathematical Constants (Properties)

```javascript
console.log(Math.PI);        // 3.141592653589793
console.log(Math.E);         // 2.718281828459045 (Euler's number)
console.log(Math.SQRT2);     // 1.4142135623730951 (Square root of 2)
console.log(Math.SQRT1_2);   // 0.7071067811865476 (Square root of 1/2)
console.log(Math.LN2);       // 0.6931471805599453 (Natural log of 2)
console.log(Math.LN10);      // 2.302585092994046 (Natural log of 10)

```

---

### B. Rounding and Truncation Methods

#### 1. `Math.abs(x)`

Returns the absolute (non-negative) value of a number.

```javascript
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4));  // 4

```

#### 2. `Math.round(x)`

Rounds a number to the **nearest integer**. If the fractional part is $0.5$ or greater, it rounds up.

```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

```

#### 3. `Math.ceil(x)`

Rounds a number **upward** to the next integer (ceiling).

```javascript
console.log(Math.ceil(4.3)); // 5
console.log(Math.ceil(-4.7)); // -4

```

#### 4. `Math.floor(x)`

Rounds a number **downward** to the previous integer (floor).

```javascript
console.log(Math.floor(4.7));  // 4
console.log(Math.floor(-4.3)); // -5

```

#### 5. `Math.trunc(x)`

Removes any fractional digits, returning the integer part (truncation without rounding).

```javascript
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4

```

#### 6. `Math.sign(x)`

Returns `1`, `-1`, `0`, `-0`, or `NaN` indicating the sign of a number.

```javascript
console.log(Math.sign(-10)); // -1
console.log(Math.sign(10));  // 1
console.log(Math.sign(0));   // 0

```

---

### C. Power, Roots, and Minimum / Maximum

#### 1. `Math.min(val1, val2, ...)` & `Math.max(val1, val2, ...)`

Returns the smallest or largest of zero or more numbers.

```javascript
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// Using with Arrays via Spread Operator:
const arr = [10, 20, 5, 40];
console.log(Math.max(...arr)); // 40

```

#### 2. `Math.pow(base, exponent)`

Returns base raised to exponent power ($base^{exponent}$). Equivalent to `base ** exponent`.

```javascript
console.log(Math.pow(2, 3)); // 8

```

#### 3. `Math.sqrt(x)` & `Math.cbrt(x)`

* `Math.sqrt(x)`: Returns the square root ($\sqrt{x}$).
* `Math.cbrt(x)`: Returns the cube root ($\sqrt[3]{x}$).

```javascript
console.log(Math.sqrt(25)); // 5
console.log(Math.cbrt(27)); // 3

```

#### 4. `Math.hypot(v1, v2, ...)`

Returns the square root of the sum of squares of its arguments ($\sqrt{v_1^2 + v_2^2 + \dots}$).

```javascript
console.log(Math.hypot(3, 4)); // 5

```

---

## 5. Random Number Generation (`Math.random()`)

`Math.random()` generates a pseudo-random floating-point number in the range $[0, 1)$ (inclusive of $0$, but exclusive of $1$).

```javascript
// Basic Random Float: 0 <= value < 1
console.log(Math.random());

```

### Scaling Random Numbers

#### Case 1: Random Integer from 1 to 10

```javascript
// Math.random() * 10 gives range [0, 10)
// Math.floor(...) gives integers 0 to 9
// + 1 shifts range to 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

```

#### Case 2: Generic Random Integer in Range `[min, max]`

To generate a random integer within a closed inclusive range $[min, max]$:

```javascript
const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Output: Random integer between 10 and 20 (inclusive)

```

```
                          ┌──────────────────────────────────────────────┐
                          │   Random Range Breakdown Formula             │
                          └──────────────────────┬───────────────────────┘
                                                 │
          ┌──────────────────────────────────────┼──────────────────────────────────────┐
          ▼                                      ▼                                      ▼
┌──────────────────┐                   ┌──────────────────┐                   ┌──────────────────┐
│ (max - min + 1)  │                   │ Math.floor(...)  │                   │     + min        │
├──────────────────┤                   ├──────────────────┤                   ├──────────────────┤
│ Calculates total │                   │ Rounds down to   │                   │ Shifts starting  │
│ count of values  │                   │ integer values   │                   │ offset to min    │
│ in the range     │                   │ starting at 0    │                   │ boundary         │
└──────────────────┘                   └──────────────────┘                   └──────────────────┘

```

---

## 🎯 Interview Questions & Edge Cases

### Q1: Why does `0.1 + 0.2 === 0.3` return `false`?

**Answer:** JavaScript represents numbers using the **IEEE 754 floating-point standard** (64-bit binary format). Decimal numbers like `0.1` and `0.2` cannot be represented precisely in binary floating-point format, leading to small precision errors:

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Solution: Use Number.EPSILON or toFixed()
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true

```

---

### Q2: What is the difference between `toFixed()` and `toPrecision()`?

* **`toFixed(n)`**: Controls the number of digits **after the decimal point**.
* **`toPrecision(n)`**: Controls the total count of **significant digits** across the entire number.

```javascript
const val = 123.456;

console.log(val.toFixed(2));     // "123.46" (2 decimal places)
console.log(val.toPrecision(2)); // "1.2e+2" (2 total significant digits)

```

---

### Q3: What do `Math.min()` and `Math.max()` return when called without arguments?

**Answer:**

* `Math.min()` returns **`Infinity`**.
* `Math.max()` returns **`-Infinity`**.

This occurs because `Math.min()` compares inputs starting with positive infinity as the baseline value, while `Math.max()` starts with negative infinity.

---

### Q4: How do `Math.floor()` and `Math.trunc()` behave differently with negative numbers?

* **`Math.floor()`**: Always rounds down toward negative infinity.
* **`Math.trunc()`**: Simply discards the fractional part regardless of sign.

```javascript
console.log(Math.floor(-4.2)); // -5
console.log(Math.trunc(-4.2)); // -4

```