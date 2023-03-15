import { Component, OnInit } from '@angular/core';
import { Reminder } from "../models/Reminder"

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})

export class CreateReminderComponent implements OnInit {

  reminder:Reminder = new Reminder(Math.floor(Math.random() * 100000), "", "", "", 0);
  remindersRaw:string = "";
  wasSubmitted:boolean = false;

  ngOnInit()
  {
  }

  public onSubmit()
  {
    let allReminders = this.remindersRaw.split('\n');
    for(let x=0;x < allReminders.length;++x)
    {
      let title = "";
      let content = "";
      let dateExpires = "";
      let priority = "";

      if(allReminders.length == 3)
      {
        title = allReminders[0];
        content = allReminders[1];
        dateExpires = allReminders[2];
        priority = allReminders[3];
      }
      else if(allReminders.length == 2)
      {
        title = allReminders[0];
        content = allReminders[1];
        dateExpires = allReminders[2];
        priority = allReminders[3];
      }
      else
      {
        title = allReminders[0];
      }
     //allReminders.push(new Reminder(Math.floor(Math.random() * 1000000), title, content, dateExpires, priority));
    }
  }
}
