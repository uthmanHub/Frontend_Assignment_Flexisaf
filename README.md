# Frontend_Assignment_Flexisaf Project

This repository contains the code for the Frontend_Assignment_Flexisaf project. Below are the steps I took to collaborate on the project using Git and GitHub.

## 1. Create a Repository

### Scenario
I started a new project, **Frontend_Assignment_Flexisaf**, and created a repository on GitHub.

### Steps
1. Go to [GitHub](https://github.com/).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `Frontend_Assignment_Flexisaf` and choose the repository's visibility (public or private).
4. Click **Create repository**.

---

## 2. Clone the Repository

### Scenario
Once the repository was created, I cloned it to my local machine to start working on it.

### Steps
1. Go to the `website-redesign` repository on GitHub.
2. Click the **Code** button and copy the HTTPS or SSH URL.
3. Open your terminal and run:
    ``` 
    git clone https://github.com/username/Frontend_Assignment_Flexisaf.git 
    ```
4. This will create a local copy of the repository on my machine.

---

## 3. Create a New Branch

### Scenario
I created a new branch to work on a specific feature (e.g., homepage layout) without affecting the `main` branch.

### Steps
1. Navigate to the `Frontend_Assignment_Flexisaf` directory.
2. Create a new branch:
    ``` 
    git checkout -b project-layout 
    ```
3. I am now working on the `project-layout` branch.

---

## 4. Make and Commit Changes

### Scenario
Changes were made to the project folder, and I committed those changes.

### Steps
1. Modify files and folders.
2. Add files to staging:
    ``` 
    git add . 
    ```
3. Commit the changes:
    ``` 
    git commit -m "updated file structure + project layout design" 
    ```

---

## 5. Push Changes to GitHub

### Scenario
After committing changes, I pushed them to GitHub for collaboration.

### Steps
1. Push the `project-layout` branch to GitHub:
    ``` 
    git push origin project-layout 
    ```

---

## 6. Fetch Changes from the Remote Repository

### Scenario
I fetched the latest changes from the remote repository to ensure I'm up to date with the team's work.

### Steps
1. Fetch the latest changes from the remote repository:
    ``` 
    git fetch origin 
    ```

---

## 7. Merge Changes from the `main` Branch

### Scenario
To ensure my branch was up-to-date with the latest code, I merged changes from the `main` branch into my feature branch.

### Steps
1. Switch to the `project-layout` branch if you're not already on it:
    ``` 
    git checkout project-layout 
    ```
2. Merge the `main` branch into my feature branch:
    ``` 
    git merge main 
    ```

---

## 8. Create a Pull Request (PR)

### Scenario
Once the feature was complete, I created a pull request to merge it into the `main` branch.

### Steps
1. On GitHub, go to the **Pull Requests** section.
2. Click **Compare & pull request**.
3. Add a title and description, then click **Create pull request**.

---

## 9. Review and Merge Pull Request

### Scenario
After the pull request was created, the team reviewed and merged it.

### Steps
1. Review the changes in the pull request.
2. Click **Merge pull request** to merge the changes into the `main` branch.
3. Delete the feature branch (optional, after merging):
    ``` 
    git branch -d project-layout 
    git push origin --delete project-layout 
    ```

---

## 10. Revert a Commit

### Scenario
If an issue was found in a previous commit, I could revert it.

### Steps
1. To revert a problematic commit, use the commit hash:
    ``` 
    git revert <commit-hash> e.g git revert 1ee72904bc6f4406c12f10416be2e4bc6f4406c12f10416be2e75925974924
    ```

---

## 11. Rename a Branch

### Scenario
If I needed to rename a branch, I could do so easily.

### Steps
1. Rename the current branch:
    ``` 
    git branch -m new-branch-layout 
    ```
2. Push the renamed branch to GitHub:
    ``` 
    git push origin new-branch-layout 
    ```

---

## 1. Delete a Branch

### Scenario
I delete the branch once a feature is complete to keep the repository clean.

### Steps
1. Delete the local branch:
    ``` 
    git branch -d project-layout 
    ```
2. Delete the remote branch:
    ``` 
    git push origin --delete project-layout 
    ```




# Week 3 Learning Summary

In this week, I explored fundamental React concepts and applied them in building a website with **Home, About, and Blog** pages using **React Router** for navigation. Below are the key topics covered:

### 📌 **Virtual DOM**
- React uses a Virtual DOM to optimize UI rendering by updating only the necessary parts of the real DOM.

### 📌 **State & Props**
- **State**: Manages component-specific data that triggers re-renders when updated.
- **Props**: Used to pass data from parent to child components.

### 📌 **JSX (JavaScript XML)**
- A syntax extension that allows writing HTML-like code inside JavaScript.
- Example:
  ```jsx
  const greeting = <h1>Hello, World!</h1>;
  ```

### 📌 **Fragments**
- Used to group multiple elements without adding extra DOM nodes.
- Example:
  ```jsx
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
  ```

### 📌 **Event Handling in React**
- Events are handled using camelCase syntax and function references.
- Example:
  ```jsx
  function handleClick() {
    alert('Button clicked!');
  }
  
  <button onClick={handleClick}>Click Me</button>
  ```

### 📌 **React Router for Navigation**
- Implemented `react-router-dom` for navigation between pages.
- Example:
  ```jsx
  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    );
  }
  ```

This week’s learning provided a solid foundation for structuring React applications with dynamic components and navigation. 🚀



# Week 4 Learning Summary

This week, I focused on making API calls in React using **fetch API** and **Axios** to perform CRUD operations (**GET, POST, PUT, and DELETE**). I implemented these in my project using the **DummyJSON Store API** (`https://dummyjson.com/products`) to manage product data.

---

### 📌 **Making API Calls in React**
API calls were integrated inside:
- `useEffect()` for fetching data on component mount.
- Event handlers for actions like adding, updating, and deleting products.

---

### 📌 **GET All Request (Fetching Products)**
Retrieves product data from the API.

```jsx
useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
    .catch((error) => console.error("Error:", error));
}, []);
```

Here’s how you can fetch a **single product** using the DummyJSON Store API:

### 📌 **GET Request (Fetching a Single Product by ID)**
Retrieves details of a specific product.

#### **Using `fetch` API:**
```jsx
const {id} = useParams();

fetch('https://dummyjson.com/products/' + id)
  .then((res) => res.json())
  .then((data) => console.log("Single Product:", data))
  .catch((error) => console.error("Error:", error));
```

#### **Using Axios:**
```jsx
import axios from "axios";

const {id} = useParams();

axios.get('https://dummyjson.com/products/' + id)
  .then((response) => console.log("Single Product:", response.data))
  .catch((error) => console.error("Error:", error));
```

This will return details of the product with the specified ID. Would you like to display this data in your React component?


---


### 📌 **POST Request (Adding a Product)**
Sends a new product to the API.

```jsx
const newProduct = { title: "New Phone", price: 299 };

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
})
  .then((res) => res.json())
  .then((data) => console.log("Product added:", data));
```

---

### 📌 **PUT Request (Updating a Product)**
Updates an existing product.

```jsx
const updatedProduct = { title: "Updated Phone", price: 349 };

fetch("https://dummyjson.com/products/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedProduct),
})
  .then((res) => res.json())
  .then((data) => console.log("Product updated:", data));
```

---

### 📌 **DELETE Request (Removing a Product)**
Deletes a product from the store.

```jsx
fetch("https://dummyjson.com/products/1", {
  method: "DELETE",
})
  .then(() => console.log("Product deleted"));
```

---

### 📌 **Key Takeaways**
✅ Used **DummyJSON Store API** for real-world API interaction.  
✅ Implemented **fetch API** for making network requests.  
✅ Implemented loading effect while waiting for network requests.  
✅ Handled API responses dynamically in a React application.  
✅ Practiced updating UI based on API responses.

This week’s learning improved my ability to integrate backend APIs with a React frontend. 🚀



# **Week 5 Learning Summary: React Hooks**  

This week, I explored essential React Hooks for managing state, handling side effects, optimizing performance, and referencing DOM elements. Additionally, I used the useRef hook to collect user information/message in a single object and also created a custom hook called useFetch to simplify API requests.  

## **📌 Hooks Covered:**  
- `useState` → Manages component state.  
- `useEffect` → Handles side effects (e.g., fetching data).  
- `useRef` → References DOM elements and stores persistent values.  
- `useMemo` → Optimizes expensive computations.  
- `useCallback` → Memoizes functions to prevent unnecessary re-renders.  

---

## **🔹 useState (Managing State in Functional Components)**  
`useState` allows components to **store and update state** without needing class components.  

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- **Why use `useState`?**  
  - Keeps track of dynamic values.  
  - Triggers a component re-render when the state updates.  

---

## **🔹 useEffect (Handling Side Effects & Fetching Data)**  
`useEffect` runs **after rendering** and is used for **fetching data, subscriptions, or modifying the DOM**.  

```jsx
import { useState, useEffect } from "react";

function FetchData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error:", error));
  }, []); // Runs only once when the component mounts.

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
```
- **Why use `useEffect`?**  
  - Handles **side effects** like API calls and event listeners.  
  - Runs on **mount, update, or unmount**, depending on dependencies.  

---

## **🔹 useRef (Referencing DOM Elements & Persistent Values)**  
`useRef` is used to **access DOM elements directly** and to **store values without causing re-renders**.  

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```
- **Why use `useRef`?**  
  - Stores **mutable values** that **persist** between renders.  
  - Used to directly interact with the **DOM** (e.g., focus an input field).  

---

## **🔹 useMemo (Optimizing Expensive Computations)**  
`useMemo` **caches the result** of an expensive calculation to prevent unnecessary recomputation.  

```jsx
import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const square = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]); // Only recalculates when `num` changes.

  return <p>Square: {square}</p>;
}

function App() {
  const [num, setNum] = useState(2);

  return (
    <div>
      <ExpensiveCalculation num={num} />
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
    </div>
  );
}
```
- **Why use `useMemo`?**  
  - Improves **performance** by avoiding expensive recalculations.  
  - Useful for optimizing functions that **depend on changing state**.  

---

## **🔹 useCallback (Optimizing Function Performance)**  
`useCallback` **memoizes functions** so they are not recreated unnecessarily during re-renders.  

```jsx
import { useState, useCallback } from "react";

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Function is only created once.

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
}
```
- **Why use `useCallback`?**  
  - Prevents **function recreation** on every render.  
  - Optimizes **child component re-renders** in performance-critical apps.  

---

## **📌 Key Takeaways**  
✅ `useState` → Handles state changes.  
✅ `useEffect` → Runs side effects like fetching data.  
✅ `useRef` → References DOM elements without causing re-renders.  
✅ `useMemo` → Optimizes performance by memoizing expensive computations.  
✅ `useCallback` → Prevents unnecessary function recreation.  

These hooks **improve React applications by enhancing performance, managing state, and handling side effects efficiently**. 🚀  




# **Week 6 Learning Summary: JSON, Form Data, Promises, Async/Await**  

This week, I explored essential **JavaScript concepts** related to handling **JSON, Form Data, Promises, and Async/Await** to efficiently manage data exchange and asynchronous operations in web applications.  

---

## **📌 Topics Covered:**  
- **JSON (JavaScript Object Notation)** → A lightweight data format for storing and exchanging data.  
- **Form Data** → Capturing and submitting user input from HTML forms.  
- **Promises** → Handling asynchronous operations with `.then()` and `.catch()`.  
- **Async/Await** → Writing cleaner asynchronous code using `async` and `await`.  

---

## **🔹 JSON (JavaScript Object Notation)**  
JSON is a structured **text format** for exchanging data between a client and a server. It is widely used in APIs and web applications.  

### **🛠 Converting JSON to JavaScript Object (Parsing)**
```javascript
const jsonData = '{"name": "John Doe", "age": 25, "city": "Abuja"}';
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name); // Output: John Doe
```

### **🛠 Converting JavaScript Object to JSON (Stringifying)**
```javascript
const user = { name: "John Doe", age: 25, city: "Abuja" };
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: {"name":"John Doe","age":25,"city":"Abuja"}
```

---

## **🔹 Form Data Handling in JavaScript**  
Form data is used to **capture user input** from HTML forms and send it to a server.  

### **🛠 Capturing Form Data using FormData API**
```javascript
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const formData = new FormData(event.target);
  console.log("Name:", formData.get("name"));
  console.log("Email:", formData.get("email"));
});
```

### **🛠 Sending Form Data to an API**
```javascript
const formData = new FormData();
formData.append("name", "John Doe");
formData.append("email", "johndoe@example.com");

fetch("https://example.com/api/submit", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Error:", error));
```

---

## **🔹 Promises (Handling Asynchronous Code)**  
A **Promise** represents an operation that may complete in the future (successful or failed).  

### **🛠 Creating a Simple Promise**
```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;     // This will be the operation
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 2000);
});

fetchData
  .then((message) => console.log(message)) // Output after 2s: "Data fetched successfully!"
  .catch((error) => console.error(error));
```

---

## **🔹 Async/Await (Writing Cleaner Asynchronous Code)**  
`async` and `await` make handling asynchronous operations **simpler and more readable**.  

### **🛠 Fetching API Data with Async/Await**
```javascript
async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
```

### **🛠 Using Async/Await with Form Data Submission**
```javascript
async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  try {
    const response = await fetch("https://example.com/api/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log("Form submitted successfully:", result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

document.querySelector(".send").addEventListener("submit", submitForm);
```

---

## **📌 Key Takeaways**  
✅ **JSON** → Used for structured data exchange.  
✅ **Form Data** → Helps in capturing and sending form inputs.  
✅ **Promises** → Handle asynchronous operations with `.then()` and `.catch()`.  
✅ **Async/Await** → Makes asynchronous code easier to read and maintain.  

---

