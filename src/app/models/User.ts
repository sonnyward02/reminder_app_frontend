import { Reminder } from "./Reminder";

export class User
{
    private id: number = -1;
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private password: string = "";
    private reminders: Reminder[] = [];

    constructor(id:number, firstName:string, lastName:string, email:string, password:string, reminders:Reminder[])
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.reminders = reminders;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get FirstName():string
    {
        return this.firstName;
    }
    set FirstName(firstName:string)
    {
        this.firstName = firstName;
    }

    get LastName():string
    {
        return this.lastName;
    }
    set LastName(lastName:string)
    {
        this.lastName = lastName;
    }

    get Email():string
    {
        return this.email;
    }
    set Email(email:string)
    {
        this.email = email;
    }

    get Password():string
    {
        return this.password;
    }
    set Password(password:string)
    {
        this.password = password;
    }

    get Reminders():Reminder[]
    {
        return this.reminders;
    }
    set Reminders(reminders:Reminder[])
    {
        this.reminders = reminders;
    }
}
