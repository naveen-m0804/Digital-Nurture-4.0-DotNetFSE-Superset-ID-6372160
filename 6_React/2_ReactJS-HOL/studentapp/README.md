# React Components Overview

## 📌 Objectives

- Explain React components
- Identify the differences between components and JavaScript functions
- Identify the types of components
- Explain class component
- Explain function component
- Define component constructor
- Define render() function

---

## 🔹 What are React Components?

React components are the core building blocks of a React application. They allow you to split the user interface into independent, reusable pieces. Each component represents a specific part of the UI and can be managed separately, making development easier and more organized.

---

## 🔸 Components vs JavaScript Functions

While both React components and JavaScript functions involve code reuse and logic handling, they serve different purposes. JavaScript functions perform specific operations or calculations and return values, whereas React components return JSX that represents part of the UI. Additionally, components can manage their own state and interact with React's lifecycle methods.

---

## 🔹 Types of Components

There are two main types of components in React:

1. **Class Components** – Defined using ES6 class syntax. These components can use state and lifecycle methods.
2. **Function Components** – Defined using regular JavaScript functions. They are simpler and can use React Hooks to manage state and side effects.

---

## 🧩 Class Component

A class component is created using the `class` keyword. It includes a `render` method and can hold state and respond to lifecycle events. This type of component was the standard before the introduction of Hooks.

---

## 🧩 Function Component

A function component is a simpler way to write components using plain functions. These components were originally stateless, but with the introduction of Hooks, they can now manage state and side effects, just like class components.

---

## 🔧 Component Constructor

In class components, the constructor is a special method used to initialize the component’s state and bind methods. It is called once when the component is created. It plays a crucial role in setting up the initial configuration of the component.

---

## 🖼️ render() Function

The `render()` function is a required method in class components. It is responsible for returning the UI elements to be displayed on the screen. It is automatically called whenever the component's state or props change.

---

## 🛠️ Hands-on Lab Objectives

In this lab, you will:

- Create a class component
- Create multiple reusable components
- Render a component inside a React application

---
