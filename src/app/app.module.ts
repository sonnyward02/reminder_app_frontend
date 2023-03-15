import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { ListRemindersComponent } from './list-reminders/list-reminders.component';
import { DeleteReminderComponent } from './delete-reminder/delete-reminder.component';
import { EditReminderComponent } from './edit-reminder/edit-reminder.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateReminderComponent,
    ListRemindersComponent,
    DeleteReminderComponent,
    EditReminderComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
