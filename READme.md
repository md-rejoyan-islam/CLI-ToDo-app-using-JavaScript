# Todo CLI Application

## Description

This Todo CLI application is a simple yet powerful tool to manage your daily tasks right from the terminal. Built with JavaScript, it allows you to add, remove, update, and display tasks with ease.

## Installation

To install the Todo CLI application, follow these steps:

1. Clone the repository:

   ```bash
   https://github.com/md-rejoyan-islam/CLI-ToDo-app-using-JavaScript
   ```

2. Navigate to the project directory:

   ```bash
   cd project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

Here’s how you can use the Todo CLI application:

To add a new task:

```javascript
node src/index.js add --text="task_name"
```

To remove a task:

```javascript
node src/index.js done
```

To update a task:

```javascript
node src/index.js update --id='task_id' --text="updated_text"
```

To show next task:

```javascript
node src/index.js next
```

To find any task:

```javascript
node src/index.js find --text="task_name"
```

To display all tasks:

```javascript
node src/index.js list
```

## Dependencies

This application uses the following dependencies:

<code>yargs</code> : A command-line argument parser that makes it easy to write user-friendly CLI applications. <br>
<code>colors</code> : Use for terminal color
