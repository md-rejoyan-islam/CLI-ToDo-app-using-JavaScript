/**
 *
 * @param {Array} arr
 * @returns number
 */

function generateID(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1].id + 1;
}

/**
 * @property todolist
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 *
 */

class Todo {
  constructor(todoList = []) {
    this.todoList = todoList;
  }
  addItem(text) {
    const item = {
      text,
      id: generateID(this.todoList),
      created: new Date(),
    };
    this.todoList.push(item);
  }
  update(id, text) {
    this.todoList.find((item, index) => {
      if (item.id === id) this.todoList[index].text = text;
    });
  }
  done() {
    return this.todoList.shift();
  }
  find(text) {
    return this.todoList.find(
      (item) => item.text.toLowerCase() === text.toLowerCase()
    );
  }
  next() {
    return this.todoList[0];
  }
  list() {
    return this.todoList;
  }
}

module.exports = Todo;
