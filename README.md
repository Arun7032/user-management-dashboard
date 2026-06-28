# User Management Dashboard

## Overview

The User Management Dashboard is a React application built using Vite that allows users to manage user information through a clean and responsive interface. The application consumes data from the JSONPlaceholder API and provides functionality to view, search, sort, filter, paginate, and perform CRUD operations on users.

Since JSONPlaceholder is a mock REST API and does not persist data, Create, Update, and Delete operations are reflected by updating the local application state after successful API requests.

## Features

- View users in a responsive table
- Add a new user
- Edit existing users
- Delete users
- Search users by first name, last name, email, and department
- Sort users by first name, last name, and department
- Filter users using a popup modal
- Pagination with page sizes of 10, 25, 50, and 100
- Form validation
- Error handling
- Responsive design for desktop, tablet, and mobile devices

## Technology Stack

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Fetch API
- React Hooks
- Vitest
- React Testing Library

## Project Structure

```text
src
│
├── components
│   ├── FilterPopup
│   ├── Modal
│   ├── Pagination
│   ├── SearchBar
│   ├── Toolbar
│   ├── UserForm
│   └── UserTable
│
├── hooks
│   └── useUsers.js
│
├── pages
│   └── Dashboard
│
├── services
│   └── api.js
│
├── utils
│   ├── sorting.js
│   └── validation.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository.

```bash
git clone https://github.com/<your-username>/user-management-dashboard.git
```

Navigate to the project directory.

```bash
cd user-management-dashboard
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```
http://localhost:5173
```

## Build

Create a production build.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

## Running Tests

Run the test suite.

```bash
npm test
```

or

```bash
npm run test
```

## API

The application uses the following API.

```
https://jsonplaceholder.typicode.com/users
```

## CRUD Operations

The application supports the following operations.

- View users
- Add a user
- Edit a user
- Delete a user

Because JSONPlaceholder is a mock API, POST, PUT, and DELETE requests are successful but do not permanently modify the backend. The application updates the local state to reflect these operations immediately.

## Search

Users can be searched using the following fields.

- First Name
- Last Name
- Email
- Department

The table updates automatically as the user types.

## Sorting

Sorting is available for the following fields.

- First Name
- Last Name
- Department

Both ascending and descending order are supported.

## Filtering

The filter popup allows filtering users using the following fields.

- First Name
- Last Name
- Email
- Department

Users can apply or reset filters without refreshing the page.

## Pagination

The application supports the following page sizes.

- 10
- 25
- 50
- 100

Pagination automatically updates after search, sorting, filtering, and CRUD operations.

## Form Validation

The application validates the following fields.

- First Name is required.
- Last Name is required.
- Email is required.
- Email must be in a valid format.
- Department is required.

## Responsive Design

The application is responsive and has been tested on desktop, tablet, and mobile screen sizes.

## React Concepts Used

- Functional Components
- React Hooks
- Custom Hooks
- Component Composition
- Controlled Components
- Conditional Rendering
- State Management
- Props
- Reusable Components

## Assumptions

- Department information is generated locally because it is not available in the API response.
- CRUD operations are reflected by updating local state because JSONPlaceholder does not persist data.
- Pagination is applied after search, filtering, and sorting.

## Testing

The project uses Vitest and React Testing Library.

The tests cover:

- Validation logic
- User table rendering

## Future Improvements

Possible future enhancements include:

- Backend integration with persistent storage
- Authentication and authorization
- Server-side pagination
- Advanced filtering
- Toast notifications
- Dark mode
- Export users to CSV or PDF
- Role-based access control

## Author

Arunkumar Nethikunta