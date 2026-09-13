# 🚀 Dev Stack

Dev Stack is a simple web application where developers can explore different technologies and build their ideal development stack. Users can add technologies to their stack, remove them, and manage their selected technologies easily.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite
- React Icons

## ✨ Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, and other development technologies with their descriptions, categories, difficulty levels, and ratings.

### 2. Build Your Stack

Users can add technologies to their own stack. A technology cannot be added more than once.

### 3. Manage Your Stack

Users can remove a single technology or remove all selected technologies from their stack. Toast messages are also shown for different actions.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create UI components easily.

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component. When state changes, the component can re-render.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data in a component.

In this project, I used `useState` to manage:

- The mobile menu in the Navbar
- The user's selected technology stack
- The card vibration effect

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects such as fetching data, updating the document title, or working with APIs.

I did not use `useEffect` to load the JSON data in this project. I used a Promise with React `Suspense` and the `use()` hook to load the technology data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which item has changed, been added, or removed.

For example:

```tsx
{
  technologies.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ));
}
```

Here, `technology.id` is used as the unique key.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the **Your Stack** section:

```tsx
{
  yourStack.length === 0 ? (
    <p>Your stack is empty</p>
  ) : (
    <StackSelectedCard yourStack={yourStack} setYourStack={setYourStack} />
  );
}
```

If the stack is empty, it shows an empty message. Otherwise, it shows the selected technologies.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using **props**.

For example:

```tsx
<TechnologyCard
  technology={technology}
  yourStack={yourStack}
  setYourStack={setYourStack}
/>
```

Here, the parent passes `technology`, `yourStack`, and `setYourStack` to the child.

The child can send data or update the parent's state by using a callback function or a state setter passed through props.

In this project, `setYourStack` is passed to the child, and the child uses it to update the parent's `yourStack` state.

---

## 📌 Project Overview

Dev Stack helps developers explore technologies and create a personal technology stack in a simple and user-friendly interface.
