import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Reminder } from '../models/Reminder';

@Injectable({providedIn: 'root'})
export class ReminderServiceService
{
  hostname:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getUsers(artist:string, callback:any)
  {
    // Call the Get Users API using a HTTP GET
    this.http.get<User[]>(this.hostname + "/users/" + artist)
      .subscribe((data) =>
      {
        let users:User[] = [];
        for(let x =0;x < data.length;++x)
        {
            let reminders: Reminder[] = [];
            for(let y =0;y < data[x]['reminders'].length;++y)
            reminders.push(new Reminder(data[x]['reminders'][y]['id'], data[x]['reminders'][y]['title'], data[x]['reminders'][y]['content'], data[x]['reminders'][y]['dateExpires'], data[x]['reminders'][y]['priority']));
            users.push(new User(data[x]['id'], data[x]['firstName'], data[x]['lastName'], data[x]['email'], data[x]['password'],  reminders));
        }
        callback(users);
       });
  }

  public getReminder(artist:string, id:number, callback:any)
  {
    this.http.get<User>(this.hostname + "/reminders/" + artist + "/" + id)
      .subscribe((data) =>
      {
        let reminders:Reminder[] = [];
        for(let y =0;y < data['reminders'].length;++y)
        reminders.push(new Reminder(data['reminders'][y]['id'], data['reminders'][y]['title'], data['reminders'][y]['content'], data['reminders'][y]['dateExpires'], data['reminders'][y]['priority']));
        let user:User = new User(data['id'], data['firstName'], data['lastName'], data['email'], data['password'], reminders);
        callback(user);
    });
  }

  public createUser(user:User, callback:any)
  {
    this.http.post<User>(this.hostname + "/users", user)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public createReminder(reminder:Reminder, callback:any)
  {
    this.http.post<Reminder>(this.hostname + "/reminders", reminder)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public deleteUser(id:number, user:User, callback:any)
  {
    this.http.delete(this.hostname + "/user/" + user + "/" + id)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public deleteReminder(id:number, reminder:Reminder, callback:any)
  {
    this.http.delete(this.hostname + "/reminder/" + reminder + "/" + id)
    .subscribe((data) =>
    {
      callback(data);
    });
  }
}
