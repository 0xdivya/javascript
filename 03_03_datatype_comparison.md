# JavaScript Comparison Operators & Equality

This guide covers basic relational comparisons, implicit type coercion in comparisons, the unique behaviors of `null` and `undefined`, and the underlying ECMAScript specification rules for loose (`==`) versus strict (`===`) equality.

---

## 1. Relational Comparison Operators

Relational operators compare two values and return a Boolean result (`true` or `false`).

```javascript
console.log(2 > 3);  // false
console.log(2 < 3);  // true

```

### Type Coercion in Relational Comparisons

When comparing operands of different data types (e.g., a `string` and a `number`), JavaScript implicitly converts the string operand into a number using the `ToNumber` algorithm before performing the comparison.

```javascript
console.log("02" > 1); // true

```

* **Behind the scenes:** `"02"` is coerced to the number `2`. The expression evaluates as `2 > 1`, which is `true`.

> **Best Practice:** Always compare variables of the same data type. Mixing types in comparisons leads to hard-to-debug edge cases.

---

## 2. The `null` Comparison Paradox

The behavior of `null` in comparisons can seem contradictory if you treat relational operators and equality operators the same way. In JavaScript, **relational comparisons (`>`, `<`, `>=`, `<=`) and equality checks (`==`) work differently.**

```javascript
console.log(null > 0);  // false
console.log(null < 0);  // false
console.log(null <= 0); // true
console.log(null == 0); // false
console.log(null >= 0); // true

```

```
                        ┌─────────────────────────────────────────┐
                        │      How JavaScript Evaluates 'null'    │
                        └────────────────────┬────────────────────┘
                                             │
                 ┌───────────────────────────┴───────────────────────────┐
                 ▼                                                       ▼
  ┌──────────────────────────────┐                       ┌──────────────────────────────┐
  │ Relational Operators         │                       │ Equality Operator            │
  │ ( > , < , >= , <= )          │                       │ ( == )                       │
  ├──────────────────────────────┤                       ├──────────────────────────────┤
  │ Converts 'null' to a Number  │                       │ Does NOT convert 'null' to 0 │
  │ ToNumber(null) ──> 0         │                       │ 'null' is only equal to      │
  │ Result: 0 >= 0 is TRUE       │                       │ 'undefined' or itself        │
  └──────────────────────────────┘                       └──────────────────────────────┘

```

### Why `null >= 0` is `true`, but `null == 0` is `false`

1. **Relational Operators (`>`, `<`, `>=`, `<=`):**
* These operators follow the **Abstract Relational Comparison Algorithm**.
* JavaScript converts both operands to primitive numbers using `ToNumber()`.
* `ToNumber(null)` evaluates to `0`.
* Therefore, `null >= 0` becomes `0 >= 0`, which evaluates to **`true`**.
* `null > 0` becomes `0 > 0`, which evaluates to **`false`**.


2. **Loose Equality Operator (`==`):**
* The **Abstract Equality Comparison Algorithm** has a special rule for `null`:
* `null` is only loosely equal to `undefined` and itself (`null`).
* JavaScript does **not** convert `null` to `0` when using `==`.
* Therefore, `null == 0` evaluates to **`false`**.



---

## 3. Comparisons with `undefined`

Unlike `null`, converting `undefined` to a number yields `NaN` (Not-a-Number). **Any relational comparison involving `NaN` evaluates to `false`.**

```javascript
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false
console.log(undefined == 0); // false

```

### Step-by-Step Breakdown:

1. **Relational Checks (`>`, `<`, `<=`, `>=`):**
* JavaScript runs `ToNumber(undefined)`, which yields `NaN`.
* Comparing `NaN` with any number using `>`, `<`, `<=`, or `>=` always returns `false`.


2. **Equality Check (`==`):**
* `undefined` is only loosely equal to `null` or `undefined`.
* `undefined == 0` returns `false`.



---

## 4. Loose Equality (`==`) vs. Strict Equality (`===`)

JavaScript provides two equality operators that handle type conversion differently.

```javascript
console.log(2 == "2");  // true  (Coerces string "2" to number 2)
console.log(2 === "2"); // false (Different data types: number vs string)

```

```
                         ┌──────────────────────────────────────┐
                         │          Equality Operators          │
                         └──────────────────┬───────────────────┘
                                            │
                 ┌──────────────────────────┴──────────────────────────┐
                 ▼                                                     ▼
    ┌──────────────────────────┐                           ┌──────────────────────────┐
    │  Loose Equality ( == )   │                           │  Strict Equality ( === ) │
    │  Abstract Equality       │                           │  Strict Equality         │
    ├──────────────────────────┤                           ├──────────────────────────┤
    │ Performs implicit type   │                           │ No type coercion         │
    │ coercion if types differ │                           │ Checks BOTH value and    │
    │ before comparing         │                           │ data type                │
    └──────────────────────────┘                           └──────────────────────────┘

```

### Summary Comparison Table

| Expression | Result | Reason |
| --- | --- | --- |
| `2 == "2"` | `true` | String `"2"` is coerced to Number `2` |
| `2 === "2"` | `false` | Types differ (`number` vs `string`) |
| `null == undefined` | `true` | Special rule in spec: both represent absent values |
| `null === undefined` | `false` | Types differ (`object`/`null` vs `undefined`) |
| `0 == false` | `true` | Both coerce to `0` |
| `0 === false` | `false` | Types differ (`number` vs `boolean`) |
| `"" == false` | `true` | Both coerce to `0` |
| `"" === false` | `false` | Types differ (`string` vs `boolean`) |

---

## 🎯 Important Interview Questions & ECMAScript Concepts

### Q1: Why does `null >= 0` return `true` while `null == 0` returns `false`?

**Answer:** Relational operators (`>=`, `<=`) convert `null` to a number (`0`) via the `ToNumber` conversion rule, making `0 >= 0` evaluate to `true`. In contrast, the loose equality operator (`==`) treats `null` as a special case: `null` is only equal to `undefined` or `null`, and is **not** coerced to `0`.

---

### Q2: What is the difference between `null == undefined` and `null === undefined`?

**Answer:**

* `null == undefined` returns **`true`** because the Abstract Equality Comparison algorithm specifically defines `null` and `undefined` as loosely equal to each other.
* `null === undefined` returns **`false`** because they belong to different data types (`null` is of type `object`/`null`, whereas `undefined` is of type `undefined`).

---

### Q3: Why should relational comparisons with `null` or `undefined` be avoided?

**Answer:** They cause inconsistent and non-intuitive results due to differences in how `ToNumber` handles them:

* `ToNumber(null)` becomes `0`.
* `ToNumber(undefined)` becomes `NaN`.

This causes relational checks with `undefined` to silently evaluate to `false` without throwing an error, introducing subtle bugs.

---

### Q4: How does `===` compare two objects or arrays in JavaScript?

**Answer:** For non-primitive reference types (objects, arrays, functions), `===` compares their **memory references**, not their structure or values. Two distinct object literals with identical properties will evaluate to `false`.

```javascript
console.log({} === {}); // false (different memory references)
console.log([] === []); // false (different memory references)

let obj1 = { name: "divya" };
let obj2 = obj1;
console.log(obj1 === obj2); // true (point to the same reference)

```