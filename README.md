# Todo App

A simple, minimalist Todo application built with React that allows users to manage their tasks. The app fetches initial todos from JSONPlaceholder API and provides basic todo management functionality.

## Features

- Fetch and display todos from an external API
- Add new todos
- Delete existing todos
- Toggle todo completion status using strikethrough
- Minimalist and responsive design
- Loading state handling

## Technologies Used

- React
- Context API for state management
- CSS for styling
- JSONPlaceholder API for initial todos

## Features Implementation

- **TodoContext**: Manages the application state and provides todo-related operations
- **TodoList**: Displays the list of todos and handles todo interactions
- **TodoForm**: Handles the creation of new todos
- **Styling**: Minimal and clean design with CSS

## API Integration

The app uses JSONPlaceholder API to fetch initial todos:
- Endpoint: `https://jsonplaceholder.typicode.com/todos`
- Fetches first 10 todos
- Implements error handling for failed API requests