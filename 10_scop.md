# Complete Guide to Scope, Hoisting, and Functions in JavaScript

This repository covers key core concepts in JavaScript, including **Global vs. Block Scope**, **Variable Declarations (`var`, `let`, `const`)**, **Lexical Scope & Closures**, and **Function Declaration vs. Function Expression (Hoisting)**.

---

## 1. Variable Declarations & Scope

JavaScript has three main types of scope:

1. **Global Scope:** Variables declared outside any function or block. Accessible everywhere in your code.
2. **Block Scope:** Introduced in ES6. Variables declared inside a block (`{ ... }`) using `let` or `const` cannot be accessed outside that block.
3. **Function Scope:** Variables declared inside a function are local to that function, regardless of whether you use `var`, `let`, or `const`.

### Code Walkthrough: Global vs. Block Scope

```javascript
// Global scope
let a = 1;
const b = 2;
var c = 3;

// Block scope
if (true) {
    let a = 4;   // Shadowing global 'a' within this block
    const b = 5;   // Shadowing global 'b' within this block
    var c = 6;     // Overwrites the global 'c'!
    // console.log("I am in block scope", a, b, c); // Output: 4, 5, 6
}

console.log(a, b, c); // Output: 1, 2, 6

```

### Key Takeaways:

* **`let` and `const` are Block-Scoped:** The `a` and `b` defined inside the `if` block exist **only** inside that block. They do not overwrite the outer variables `a` and `b`. This process is called **variable shadowing**.
* **`var` is NOT Block-Scoped:** `var` ignores `{}` block boundaries (it only respects function boundaries). Re-declaring `c` inside the `if` block modifies the global `c`.

### Quick Comparison Table

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| **Scope** | Function Scope | Block Scope | Block Scope |
| **Re-declaration** | Allowed | Not Allowed | Not Allowed |
| **Re-assignment** | Allowed | Allowed | Not Allowed |
| **Hoisting** | Hoisted with `undefined` | Hoisted in Temporal Dead Zone (TDZ) | Hoisted in Temporal Dead Zone (TDZ) |

---

## 2. Lexical Scope & Scope Chain

**Lexical Scope** means that inner functions have access to variables declared in their outer (parent) scopes. However, outer scopes cannot look inside inner scopes.

### Example 1: Nested Functions

```javascript
function one() {
    const username = "divya";

    function two() {
        const website = "youtube";
        console.log(username); // Works! Finds 'username' in the parent scope.
    }

    // console.log(website); // ERROR: 'website' is defined inside two() and not accessible here.

    two();
}

one(); // Output: divya

```

### Example 2: Block Scope Boundaries

```javascript
if (true) {
    const username = "divya";
    if (username === "divya") {
        const website = "youtube";
        // console.log(username + website); // Works! "divyayoutube"
    }
    // console.log(website); // ERROR: ReferenceError - 'website' is out of scope.
}
// console.log(username); // ERROR: ReferenceError - 'username' is out of scope.

```

### Visualizing the Scope Chain

Think of scope like a **one-way mirror**:

* An **inner scope** can look **out** to read parent variables.
* An **outer scope** **cannot** look **in** to read child variables.

---

## 3. Function Declarations vs. Function Expressions (Hoisting)

**Hoisting** is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase before code execution.

### Function Declaration (Hoisted)

```javascript
console.log(addone(5)); // Output: 6 (Works fine due to hoisting!)

function addone(num) {
    return num + 1;
}

console.log(addone(5)); // Output: 6

```

* **Why it works:** Function declarations are completely hoisted into memory before execution begins. You can call them anywhere in their scope—even before they appear in the file.

### Function Expression (Not Hoisted in the same way)

```javascript
// console.log(addTwo(5)); // ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

addTwo(5); // Output: 7 (Works fine after initialization)

```

* **Why it fails before initialization:** Here, `addTwo` is a variable holding an anonymous function. Variable declarations using `let` or `const` enter the **Temporal Dead Zone (TDZ)** from the start of the block until the execution reaches the declaration line.

---

## 4. Advanced Scope Concepts (MDN Deep-Dive)

To round out your interview and project preparation, here are essential MDN scope concepts connected to this code:

### A. The Temporal Dead Zone (TDZ)

When JavaScript runs code, `let` and `const` variables are hoisted, but they remain uninitialized in a region called the **Temporal Dead Zone (TDZ)**. Accessing them before their actual line of code causes a `ReferenceError`.

```javascript
// TDZ starts here
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;     // TDZ ends here

```

### B. Module Scope & Script Scope

* **Script Scope:** Top-level variables declared with `let` or `const` in a standard `<script>` tag.
* **Module Scope:** Variables declared inside ES6 modules (`<script type="module">`) are scoped strictly to that file and do not pollute the global scope.

### C. Shadowing & Variable Overriding

Variable shadowing occurs when an inner scope declares a variable with the same name as one in an outer scope. The inner declaration temporarily overrides the outer variable within that specific block.

---

## 5. Interview Cheat Sheet

* **Q: Why avoid `var` in modern JavaScript?**
* **A:** `var` lacks block scoping and permits unintended re-declarations, leading to unexpected bug risk across nested blocks.


* **Q: Difference between Function Declarations and Function Expressions?**
* **A:** Function Declarations are fully hoisted (callable before declaration). Function Expressions assigned to `let`/`const` are stuck in the TDZ and cannot be invoked before their assignment.


* **Q: What happens if you access an undeclared variable?**
* **A:** JavaScript throws a `ReferenceError: <variable> is not defined`.


* **Q: What is the Scope Chain?**
* **A:** The mechanism JavaScript uses to resolve variable names. If a variable isn't found in the current scope, JavaScript recursively checks the outer parent scopes until it reaches the global scope.