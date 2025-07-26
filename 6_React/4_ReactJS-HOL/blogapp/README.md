# React Component Lifecycle - Concepts and Objectives

## ✅ Objectives

- Explain the need and benefits of component lifecycle  
- Identify various lifecycle hook methods  
- List the sequence of steps in rendering a component  

---

## 📌 Need and Benefits of Component Lifecycle

The **component lifecycle** in React refers to the series of methods that are invoked at different stages of a component's existence — from creation and updates to unmounting. Understanding the lifecycle is important because it allows developers to:

- Control what happens at each stage (e.g., fetching data when the component mounts)
- Optimize performance
- Manage side effects and cleanup tasks
- Improve debugging and code readability

Lifecycle methods make it easier to build predictable and maintainable React components by providing structured hooks into the rendering and updating process.

---

## 🔄 Lifecycle Hook Methods

Lifecycle methods (also called lifecycle hooks) are special methods available in **class components** that let you run code at specific points in the component's life. Some common lifecycle methods include:

- `constructor()` – Initializes the component state and props
- `componentDidMount()` – Called once after the component is rendered for the first time
- `componentDidUpdate()` – Called after the component updates due to changes in props or state
- `componentWillUnmount()` – Called just before the component is removed from the DOM
- `shouldComponentUpdate()` – Determines whether the component should re-render or not

In **function components**, React provides **Hooks** like `useEffect()` that serve a similar purpose.

---

## 📋 Sequence of Steps in Rendering a Component

When a component is rendered, it goes through the following steps:

1. **Initialization** – Component is created with initial state and props (via `constructor`)
2. **Mounting** – Component is added to the DOM (`render()` → `componentDidMount`)
3. **Updating** – Component updates due to changes in props or state (`render()` → `componentDidUpdate`)
4. **Unmounting** – Component is removed from the DOM (`componentWillUnmount`)

This sequence helps React manage component behavior efficiently during its lifecycle.

---
