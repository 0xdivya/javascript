# JavaScript Operations, Type Coercion & Operators

This guide covers JavaScript arithmetic operations, string concatenation, evaluation order, implicit numeric conversions, chained assignments, and the difference between **prefix** and **postfix** increment/decrement operators.

---

## 1. Arithmetic Operations & Unary Negation

JavaScript supports standard mathematical operators along with unary negation.

```javascript
let value = 3;
let negValue = -value; // Unary negation: flips sign
console.log(negValue); // -3

console.log(2 + 2);  // Addition: 4
console.log(2 - 2);  // Subtraction: 0
console.log(2 * 2);  // Multiplication: 4
console.log(2 ** 3); // Exponentiation (2^3): 8
console.log(2 / 3);  // Division: 0.6666666666666666
console.log(2 % 3);  // Modulus (Remainder): 2

```

---

## 2. String Concatenation & Complex Type Coercion

When using the addition operator `+`, JavaScript treats it differently depending on operand types. If a **string** is involved, `+` performs **string concatenation** rather than numeric addition.

### Basic Concatenation

```javascript
let str1 = "hello";
let str2 = "world";

let str3 = str1 + " " + str2;
console.log(str3); // "hello world"

```

### Order of Evaluation & Coercion Rules

JavaScript evaluates expressions **from left to right**. The presence of a string changes subsequent addition operations into string concatenations.

```javascript
console.log(1 + "2");     // "12"  (Number + String => String)
console.log("1" + 2);     // "12"  (String + Number => String)

console.log("1" + 2 + 2); // "122" 
// Step 1: "1" + 2 => "12"
// Step 2: "12" + 2 => "122"

console.log(2 + 2 + "2"); // "42"  
// Step 1: 2 + 2 => 4 (Numeric addition happens first)
// Step 2: 4 + "2" => "42" (Then converted to string concatenation)

```

---

## 3. Unary Plus Operator (`+`) for Type Conversion

The unary plus operator (`+`) placed before an operand automatically attempts to convert that operand into a **Number**.

```javascript
console.log(true);   // true (Boolean)
console.log(+true);  // 1    (Converted to Number)
console.log(+"");    // 0    (Empty string converted to Number)
console.log(+"123"); // 123  (String converted to Number)

```

---

## 4. Chained Assignments

JavaScript supports chaining assignments. Expressions are evaluated from **right to left** (Right-associativity).

```javascript
let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

// Step 1: 2 + 2 evaluates to 4
// Step 2: num3 = 4
// Step 3: num2 = 4
// Step 4: num1 = 4

console.log(num1, num2, num3); // 4 4 4

```

> **Best Practice:** Avoid chained assignments in production code because they lower readability and can accidentally declare global variables if `let`/`const` is missed.

---

## 5. Prefix vs. Postfix Increment (`++`) & Decrement (`--`)

The increment operator (`++`) adds `1` to its operand, while decrement (`--`) subtracts `1`. Their placement relative to the variable determines **when** the increment occurs.

```
                    ┌─────────────────────────────────────────┐
                    │      Increment / Decrement Operators    │
                    └────────────────────┬────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
     ┌───────────────────────┐                       ┌───────────────────────┐
     │    Postfix (x++)      │                       │     Prefix (++x)      │
     │ Returns original value│                       │  Increments value     │
     │ FIRST, then increments│                       │  FIRST, then returns  │
     └───────────────────────┘                       └───────────────────────┘

```

### A. Postfix Increment (`x++`)

Returns the variable's value **before** the increment, then increments the variable.

```javascript
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101

let a = 5;
let b = a++; // Assigns current value of 'a' (5) to 'b', then increments 'a' to 6

console.log(a); // 6
console.log(b); // 5

```

### B. Prefix Increment (`++x`)

Increments the variable's value **first**, then returns the updated value.

```javascript
let x = 5;
let y = ++x; // Increments 'x' to 6 first, then assigns 6 to 'y'

console.log(x); // 6
console.log(y); // 6

```

### Summary Comparison Code

```javascript
// Postfix Example
let p = 10;
console.log(p++); // Prints: 10 (value before increment)
console.log(p);   // Prints: 11 (updated value)

// Prefix Example
let q = 10;
console.log(++q); // Prints: 11 (updated immediately)
console.log(q);   // Prints: 11

```

---

## 🎯 Important Interview Questions

### Q1: What is the output of `console.log(1 + 2 + "3" + 4 + 5)`?

**Answer:** `"3345"`

* **Step-by-step breakdown:**
1. `1 + 2` $\rightarrow$ `3` (Number addition)
2. `3 + "3"` $\rightarrow$ `"33"` (Converted to string)
3. `"33" + 4` $\rightarrow$ `"334"` (String concatenation)
4. `"334" + 5` $\rightarrow$ `"3345"` (String concatenation)



---

### Q2: What is the difference between `+true` and `true+`?

**Answer:**

* `+true` is a valid **unary operation** that coerces `true` to `1`.
* `true+` results in a `SyntaxError: Unexpected token` because the binary addition operator `+` expects an operand after it.

---

### Q3: How do operator associativity rules apply to `a = b = c` vs `a + b + c`?

**Answer:**

* **Assignment operators (`=`)** are **right-associative** (evaluated from right to left).
* **Arithmetic operators (`+`, `-`, `*`)** are **left-associative** (evaluated from left to right).

---

### Q4: Explain the result of this expression: `let x = 3; const y = x++;`

**Answer:** `x` becomes `4` and `y` becomes `3`.
Because `x++` is in **postfix form**, it returns the value of `x` *before* incrementing (`3`), assigning `3` to `y`. After evaluation, `x` is incremented to `4`.