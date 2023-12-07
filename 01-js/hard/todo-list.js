/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todoList = []
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(i){
    if(i>=0 && i<this.todoList.length)
      this.todoList.splice(i,1);
  }

  update(i, todo){
    if(i>=0 && i<this.todoList.length)
      this.todoList[i] = todo
  }

  getAll(){
    return this.todoList;
  }

  get(i){
    if(i>=0 && i<this.todoList.length)
      return this.todoList[i];
    else return null;
  }

  clear(){
    this.todoList=[];
  }
}

module.exports = Todo;
