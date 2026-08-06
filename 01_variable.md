# JavaScript Variables: `const`, `let`, and `var`

In JavaScript, variables are declared using three main keywords: **`const`**, **`let`**, and **`var`**.

---

## Key Concepts Breakdown

### 1. `const` (Constant)

* **Re-declaration:** Not allowed within the same scope.
* **Re-assignment:** Not allowed (values cannot be changed after declaration).
* **Scope:** Block Scope `{ }`.
* **When to Use:** Use by default for any variable whose value should remain fixed throughout the program (e.g., `accountId`).

### 2. `let` (Modern Variable)

* **Re-declaration:** Not allowed within the same scope (`let a = 1; let a = 2;` throws an error).
* **Re-assignment:** Allowed (`accountEmail = "hc@hc.com"`).
* **Scope:** Block Scope `{ }` (accessible only within the enclosing `{}` block).
* **When to Use:** Use when you know the variable's value will change later in the code (e.g., `accountEmail`).

### 3. `var` (Legacy / Old Way)

* **Re-declaration:** Allowed (`var x = 1; var x = 2;` runs without error).
* **Re-assignment:** Allowed.
* **Scope:** Function Scope / Global Scope (does **not** respect block scope `{}`).
* **Is `var` still used?**
* **No.** In modern JavaScript (ES6+), `var` is strongly discouraged because its lack of block scoping often leads to unpredictable variable leaks and bugs. Use `let` or `const` instead.



### 4. Undeclared Variables (`accountCity = "Jaipur"`)

* Assigning a value without `const`, `let`, or `var` automatically assigns it to the **Global Scope**.
* This is considered bad practice and throws an error in JavaScript `strict mode`.

### 5. Uninitialized Variables (`let accountState;`)

* Declaring a variable without assigning an initial value gives it a default value of **`undefined`**.

---

## Quick Comparison Table

| Feature | `const` | `let` | `var` |
| --- | --- | --- | --- |
| **Scope** | Block Scope `{}` | Block Scope `{}` | Function/Global Scope |
| **Re-assign** | ❌ No | ✅ Yes | ✅ Yes |
| **Re-declare** | ❌ No | ❌ No | ✅ Yes |
| **Current Practice** | **Preferred (Default)** | **Preferred (If values change)** | ❌ **Avoid / Deprecated** |

---

## Best Practice Summary

> Use **`const`** by default for all variables. Switch to **`let`** only when you need to reassign the value later. **Avoid using `var` entirely.**