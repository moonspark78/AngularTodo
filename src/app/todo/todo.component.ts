import { Component } from '@angular/core';
import {Todo} from "../class/todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoValue: String = '';

  todoList: Todo[] = [
    {
      content: "Todo1",
      value: false
    },
    {
      content: "Todo2",
      value: false
    },
    {
      content: "Todo3",
      value: false
    },
  ];
  finishedList: Todo[]=[

  ]
  constructor(){}

  addTodo(){
    this.todoList.push({content:this.todoValue, value:false})
    this.todoValue = ' ';
  }
  changeTodo(i: number){
    const item = this.todoList.splice(i,1);
    console.log(item);
    this.finishedList.push(item[0])
  }
  changeFinished(i: number){
    const item = this.finishedList.splice(i,1);
    this.todoList.push(item[0]);
  }
}
