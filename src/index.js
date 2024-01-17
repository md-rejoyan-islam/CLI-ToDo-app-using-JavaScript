const { argv } = require("yargs");
const { saveFile, readFile } = require("./utils");
const Todo = require("./todo");
const path = require("path");
const { ADD, UPDATE, DONE, NEXT, LIST, FIND } = require("./command");
const colors = require("colors");

const fileName = "./data.json";
const filePath = path.join(__dirname, fileName);

(function init() {
  const data = readFile(filePath) || [];
  const todo = new Todo(data);
  const command = argv._[0];
  switch (command) {
    case ADD:
      todo.addItem(argv.text);
      saveFile(todo.todoList, filePath);
      console.log("Added a new task".bgGreen.white);
      break;
    case UPDATE:
      // check task
      if (!todo.todoList.find((item) => item.id === argv.id)) {
        console.log("Task not found".bgRed.white);
        return;
      }

      todo.update(argv.id, argv.text);
      saveFile(todo.todoList, filePath);
      console.log("Updated a task successfully".bgBlue.white);
      break;
    case DONE:
      if (todo.todoList.length === 0) {
        console.log("List is empty".white.bgRed);
        return;
      }
      todo.done();
      saveFile(todo.todoList, filePath);
      console.log("Successfully completed a task.".bgBlue.white);
      break;
    case NEXT:
      const item = todo.next();
      console.log(`Next task : ${item.text} - ${item.created}`.bgBlue.white);
      break;
    case LIST:
      const list = todo.list();
      if (list.length > 0) {
        [...list].map((item, index) => {
          console.log(item);
        });
      } else {
        console.log("List is empty".bgRed.white);
      }

      break;
    case FIND:
      const items = todo.find(argv.text);
      if (items) {
        console.log(
          `Found item: ${items.text} - ${items.id}- ${items.created}`.bgBlue
            .white
        );
      } else {
        console.log("Task not found".bgRed.white);
      }
      break;
    default:
      console.log("Command not found");
  }
})();
