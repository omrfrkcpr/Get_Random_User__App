# Get Random User App

https://get-random-user-info.netlify.app/

## Description

This project aims to fetch random user data via Axios from an open-source, free API or manually create users and store them in a tabular format.

## Project Planning & Management

**Epic User Story:** Retrieve and Store User Information

**User Stories:**

1. **Retrieve User Information:**

   - Task-1 = (Fetch User Information via Axios) - Send a GET request to the chosen free and open source API using Axios. - Handle the response to extract usable user information. - Display the retrieved user information to the user.
   - Task-2 = (Manually Input User Information) - Create a user interface (form or input fields) for manual user data input. - Implement validation to ensure correctness and completeness of the entered information. - Save the manually inputted user data for storage.

2. **Store User Information**

   - Task-1 = (Display Stored User Information) - Design a user-friendly table or list view to display both fetched and manually inputted user data. - Organize the displayed information in a clear and understandable format.
   - Task-2 = (Edit User Information) - Develop functionality to allow users to edit stored user data. - Design an intuitive interface for users to make edits to the displayed user information. - Update the database with the edited user data.
   - Task-3 = (Delete User Information) - Enable users to delete stored user data. - Implement a confirmation mechanism to prevent accidental deletions. - Remove the selected user data from the database upon user confirmation.

**Additional Requirement:**

- The application should have a responsive design.

## Project Skeleton

```
Get Random User App(folder)
|
├── public
|     ├── index.html
│     └── manifest.json
├── src
│    ├── assets
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
├── get-random-user.gif
├── LICENSE
├── package.lock.json
├── package.json
└── README.md
```

## Outcome

![get-random-user](https://github.com/omrfrkcpr/Get_Random_User__App/assets/77440899/a0de501b-ecff-4c71-bdcd-f6d4bc5c2105)

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

- [Open-Source API for Random-User](https://randomuser.me/api)
- [Free API for Avatar-Images](https://www.dicebear.com/styles/avataaars/)

## Contributing

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE

This repository is licensed under the GNU General Public License v3.0 License. See the GPL licence file for details.



<p align="center"><strong>&#9786; Happy Coding &#9997;</strong></p>
