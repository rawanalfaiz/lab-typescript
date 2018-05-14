// Add the reference to the interface
import {ITodoItem, IToDo} from './interfaces'
// Create class TodoItem that implements the corresponding interface
class TodoItem implements ITodoItem{
    status: boolean;
    updateAt: number;

    constructor(public title: string){
        this.updateAt = Date.now();
        this.status = false;
    }

    toggleStatus(): void{
        this.status === !this.status; //if (this.status === false)
        this.updateAt === Date.now();
    }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements IToDo{
    ToDoItems: Array<ToDoItem> = [];

    addTask(theItem: TodoItem): number{
        console.log(theItem.title)
        let outputString: string = "=========== NEW TASK ===========\n";
        this.ToDoItems.push(theItem);
        outputString += `"Task" "${theItem.title}" inserted in the list" \n`;
        outputString += `"Number of items: $(this.ToDoItems.lenght)"`;
        return this.ToDoItems.length;
    }


}



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
