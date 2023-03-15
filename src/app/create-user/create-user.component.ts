import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Reminder } from '../models/Reminder';
import { ReminderServiceService} from '../service/reminder-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit
{

  user:User = new User(Math.floor(Math.random() * 1000000), "", "", "", "", []);
  remindersRaw:string = "";
  wasSubmitted:boolean = false;

  constructor(private service: ReminderServiceService) { }

  ngOnInit()
  {
  }

  public onSubmit()
  {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let remidners:Reminder[] = [];
    let remidnersAll = this.remindersRaw.split('\n');
    for(let x=0;x < remidnersAll.length;++x)
    {
      let title = "";
      let content = "";
      let dateExpires = "";
      let priority = "";
      let reminderInfo = remidnersAll[x];
      let reminderParts = reminderInfo.split(':');
      if(reminderParts.length == 3)

      {
        title = reminderParts[0];
        content = reminderParts[1];
        dateExpires = reminderParts[2];
        priority = reminderParts[3];
      }
      else if(reminderParts.length == 2)
      {
        title = reminderParts[0];
        content = reminderParts[1];
      }
      else
      {
        title = reminderParts[0];
      }
      //remidners.push(new Reminder(Math.floor(Math.random() * 1000000), title, content, dateExpires, priority));
    }
    this.user.Reminders = remidners;
    this.service.createUser(this.user, (status:any) =>
    {
      console.log("The return from createAlbum() was " + status);
      this.wasSubmitted = true;
    });
  }
}

