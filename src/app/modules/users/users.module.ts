import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserListComponent,
    EditUserComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
