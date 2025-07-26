# Styling React Components - Overview

## ✅ Objectives

* Understanding the need for styling React components
* Working with CSS Modules and inline styles

---

## 📆 Why Style React Components?

Styling React components is essential to enhance the user experience, ensure visual consistency, and clearly communicate the structure and purpose of the UI. With proper styling, components become more intuitive, responsive, and visually appealing. React offers flexibility in how components are styled, allowing developers to choose the method that best fits the project's needs.

---

## 🖌️ Working with CSS Modules and Inline Styles

React supports multiple styling approaches. Two common methods are:

### 1. CSS Modules

CSS Modules allow you to write CSS in a modular and scoped way. Styles defined in a CSS Module file are automatically scoped locally to the component, preventing class name collisions.

**Benefits:**

* Avoids global scope pollution
* Encourages component-level styling
* Easy to maintain and reuse

### 2. Inline Styles

Inline styles are defined directly inside the component using the `style` attribute. They are useful for dynamic styling based on component state or props.

**Benefits:**

* Allows dynamic calculations and conditional styling
* No need for external CSS files

---

## 💡 Hands-on Lab Activities

In this lab, you will:

* Style a React component to improve its appearance and layout
* Define style rules in a CSS Module file
* Apply those styles to a component using the `className` attribute
* Use inline styles to apply dynamic formatting based on component data

---

By the end of this hands-on lab, you will have a solid understanding of how to style React components effectively using both CSS Modules and inline styles.

---

# React Router - Overview

## ✅ Objectives

* Explain the need and benefits of React Router
* Identify the components in React Router
* List the types of router components
* Understand parameter passing via URL

---

## 📌 Need and Benefits of React Router

React Router is a standard library for routing in React applications. It enables navigation between different components without reloading the page, creating a seamless single-page application (SPA) experience.

**Benefits:**

* Allows dynamic routing based on app state
* Prevents full-page reloads and preserves state
* Enables clean and structured navigation paths
* Supports nested and protected routes

---

## 🧩 Components in React Router

Some commonly used components in React Router include:

* **BrowserRouter** – Wraps the application and enables HTML5 history API
* **Routes** – Container for all route definitions
* **Route** – Defines the mapping between URL paths and components
* **Link** – Creates navigable links in the application
* **Navigate** – Used for programmatic redirection

---

## 🧭 Types of Router Components

React Router provides different types of routers:

1. **BrowserRouter** – Uses the browser history for clean URLs
2. **HashRouter** – Uses the hash part of the URL (`#`) to simulate routing
3. **MemoryRouter** – Keeps track of history in memory (often used in testing)

---

## 🔗 Parameter Passing via URL

React Router allows parameters to be passed directly through the URL. This is useful for dynamic routing (e.g., user profiles, product pages).

Example route path:

```
/profile/:username
```

You can access the parameter (`username`) in the component using React Router's `useParams()` hook.

---

Understanding React Router empowers you to build fully functional and dynamic navigation systems in React applications.

---
