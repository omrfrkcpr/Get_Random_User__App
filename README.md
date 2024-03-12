# Get Random User App

## Description

This project aims to fetch random user data via Axios from an open-source, free API or manually create users and store them in a tabular format.

## Project Planning & Management

**Epic User Story:** Retrieve and Store User Information

**User Stories:**

1. **Retrieve User Information:**

   - Task-1 = (Fetch User Information via Axios) - Send a GET request to the chosen free and open source API using Axios. - Handle the response to extract usable user information. - Display the retrieved user information to the user.
   - Task-2 = (Manually Input User Information) - Create a user interface (form or input fields) for manual user data input. - Implement validation to ensure correctness and completeness of the entered information. - Save the manually inputted user data for storage in order to send a POST request.

2. **Store User Information**

   - Task-1 = (Display Stored User Information) - Design a user-friendly table or list view to display both fetched and manually inputted user data. - Organize the displayed information in a clear and understandable format.
   - Task-2 = (Edit User Information) - Develop functionality to allow users to edit stored user data. - Design an intuitive interface for users to make edits to the displayed user information. - Update the database with the edited user data in order to send a PUT request.
   - Task-3 = (Delete User Information) - Enable users to delete stored user data. - Implement a confirmation mechanism to prevent accidental deletions. - Remove the selected user data from the database upon user confirmation in order to send a DELETE request.

**Additional Requirement:**

- The application should have a responsive design.

## Project Skeleton

```
Get Random User App(folder)
|
├── public
|     ├── index.html
|     ├── manifest.json
│     └── random-user.png
├── src
│    ├── components
│    │       ├── addUser
│    │       │        ├── AddUser.css
│    │       │        └── AddUser.jsx
│    │       ├── editUser
│    │       │        ├── EditUser.css
│    │       │        └── EditUser.jsx
│    │       ├── getRandomUser
│    │       │        ├── GetRandomUser.css
|    |       |        └── GetRandomUser.jsx
│    │       └── userList
│    │                ├── UserList.css
|    |                └── UserList.jsx
│    ├── pages
│    │       └── Home.jsx
│    ├── App.css
│    ├── App.js
│    ├── index.css
│    └── index.js
│
├── .gitignore
├── get-random-user-app.gif
├── LICENSE
├── package.lock.json
├── package.json
└── README.md
```

## Expected Outcome

## Objective

Build a Random User App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS (React-Bootstrap)

- JS (ReactJS)

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Additional Data

- [Tutorial Database](https://tutorial-api.fullstack.clarusway.com/tutorials/)
- [Open-Source API for Random-User](https://randomuser.me/api)
- [Free API for Avatar-Images](https://www.dicebear.com/styles/avataaars/)

<p align="center"><strong>&#9786; Happy Coding &#9997;</strong></p>
