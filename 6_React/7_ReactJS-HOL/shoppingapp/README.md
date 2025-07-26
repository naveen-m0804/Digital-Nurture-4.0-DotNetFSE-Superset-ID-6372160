# Props and reactDOM.render() - Overview

## ✅ Objectives

* Define Props
* Explain Default Props
* Identify the differences between State and Props
* Explain reactDOM.render()

---

## 📦 What are Props in React?

**Props** (short for "properties") are used to pass data from one component to another in React. They allow components to be dynamic and reusable by receiving different inputs. Props are passed to components via HTML-like attributes and are **read-only**.

**Key points:**

* Props enable communication between parent and child components
* Props are immutable inside the receiving component
* Props help in reusing components with different data inputs

---

## ⚙️ What are Default Props?

**Default Props** are used to set default values for a component’s props if no value is passed by the parent component. This ensures the component works with fallback values and avoids `undefined` behavior.

**Benefits:**

* Makes components more robust
* Reduces the need for validation and error handling for missing props

---

## 🔄 State vs Props

| Feature        | Props                           | State                         |
| -------------- | ------------------------------- | ----------------------------- |
| Mutability     | Immutable (read-only)           | Mutable (can be changed)      |
| Usage          | Passed from parent components   | Managed within the component  |
| Responsibility | External (controlled by parent) | Internal (controlled by self) |
| Purpose        | Configuration                   | Dynamic data (UI behavior)    |

Both props and state are key concepts in React, but they serve different roles in component behavior and data flow.

---

## 🧪 What is reactDOM.render()?

`ReactDOM.render()` is the method used to render a React component into the DOM. It takes two arguments:

1. The React element or component to render
2. The DOM element where the component should be mounted

This method is typically used once at the entry point of the application (usually `index.js`) to kick off the React app.

**Purpose:**

* Converts React elements into actual DOM elements
* Attaches the React component tree to a specific part of the HTML document

---
