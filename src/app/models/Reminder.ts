export class Reminder
{
    public id: number = -1;
    public title: string = "";
    public content: string = "";
    public dateExpires: string = "";
    public priority: number = -1;

    constructor(id:number, title:string, content:string, dateExpires:string, priority:number)
    {
        this.id = id;
        this.title = title;
        this.content = content;
        this.dateExpires = dateExpires;
        this.priority = priority;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Title():string
    {
        return this.title;
    }
    set Title(title:string)
    {
        this.title = title;
    }

    get Content():string
    {
        return this.content;
    }
    set Content(content:string)
    {
        this.content = this.content;
    }

    get DateExpires():string
    {
        return this.dateExpires;
    }
    set DateExpires(dateExpires:string)
    {
        this.dateExpires = this.dateExpires;
    }

    get Priority():number
    {
        return this.priority;
    }
    set Priority(priority:number)
    {
        this.priority = this.priority;
    }
}
