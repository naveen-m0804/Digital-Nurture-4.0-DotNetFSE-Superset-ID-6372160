# React Components - Concepts and Objectives

## ✅ Objectives

- Explain React components  
- Identify the differences between components and JavaScript functions  
- Identify the types of components  
- Explain class component  
- Explain function component  
- Define component constructor  
- Define render() function  

---

## 📌 React Components

React components are the foundational building blocks of any React application. They allow developers to build encapsulated, reusable pieces of UI that can manage their own state and logic. Components help in organizing the application into smaller, manageable parts.

---

## 🔍 Components vs JavaScript Functions

Although both components and JavaScript functions are reusable pieces of code, their purposes differ:

- **JavaScript functions** are used to perform logical operations or return values.
- **React components** are used to build and render UI elements. They can also manage their own state and respond to user interactions or lifecycle events.

---

## 🔸 Types of Components

React supports two primary types of components:

1. **Class Components** – These are ES6 classes that extend from React's base `Component` class and include a `render()` method.
2. **Function Components** – These are simpler components defined as JavaScript functions that return UI elements. With the introduction of Hooks, function components can now manage state and side effects too.

---

## 🧩 Class Component

A class component is a React component defined using a JavaScript class. It can hold internal state, use lifecycle methods, and must include a `render()` method to return UI content. This type of component is suitable for more complex logic and stateful behavior.

---

## 🧩 Function Component

A function component is a more concise way to write a React component using a standard JavaScript function. It receives props as input and returns JSX for rendering. With the addition of React Hooks, function components can also manage state and side effects, making them powerful and widely used.

---

## 🏗️ Component Constructor

The constructor is a special method used inside class components to initialize state and bind class methods. It is executed once when the component is created. It’s typically used to set up initial values or functions before rendering.

---

## 🖼️ render() Function

The `render()` function is a required method in class components. It determines what should be displayed on the screen. Every time a component’s state or props change, the `render()` function is automatically called to update the UI.

---
