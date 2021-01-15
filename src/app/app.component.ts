import { Component } from '@angular/core';
import { Todo } from './todo';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Todo = [];
  name = '';
  editable = false;
  addButton = "Add";
editableIndex='';


  Add(editableIndex){
    if (this.name == '') return;
    if(this.editable === true){
      const TodosList: Todo = {
        name: this.name,
        editable: this.editable
      }
      this.Todo.splice(editableIndex,1,TodosList);
      this.addButton = "Add";
      this.editable = false;
    }
    else{
      const TodosList: Todo = {
        name: this.name,
        editable: this.editable
      }
      this.Todo.splice(0,0,TodosList);
      this.name = "";
    }
  }

Delete(index){
 this.Todo.splice(index,1);
}

Edit(item,index){
this.editable = true;
this.addButton = "UPDATE"
this.name = item;
this.editableIndex = index;
}
  ngOnInit() {

    $(document).ready(function() {

         //alert('we call alert from JQuery');

    });

 }
}
