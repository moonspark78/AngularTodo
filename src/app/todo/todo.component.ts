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
  constructor(){}

  changeTodo(){
    
  }
}
