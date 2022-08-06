import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errormsg="";
  noofteams : number | ""="";
  teams: string[][]=[];

  addMember(){
    if(!this.newMemberName){ 
      this.errormsg="enter name !";
      return;
    }
    this.errormsg="";
    this.members.push(this.newMemberName);
    this.newMemberName="";
  }
  getinput(member : string){
    this.newMemberName=member;
  }
  getteaminput(value : string){
    this.noofteams=Number(value);
  }
  generateteams(){
    this.teams = [];
    const allMembers = [...this.members];
    if(!this.noofteams || this.noofteams<=0){
      this.errormsg = "invalid team size";
      return;
    }
    if (this.members.length < this.noofteams) {
      this.errormsg = 'Not enough members';
      return;
    }
    this.errormsg = '';
    while (allMembers.length) {
      for (let i = 0; i < this.noofteams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member)break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.noofteams = '';
  }
  }

