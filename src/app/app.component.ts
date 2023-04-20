import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  tasks:any=[];
  newtask(content:string){
    if (content != ""){
        this.tasks.push({id:this.tasks.length,title:content})
        
    }
  }
  removeitem(id:number){
    this.tasks=this.tasks.filter((item: {id: number}) => item.id != id)
  }
  removeall(){
    this.tasks=[]
  }
}
