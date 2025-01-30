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
