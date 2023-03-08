import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
users: User[] = []
is_admin: boolean = true 

constructor(private userService:UserService){}

ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any)=>this.users=data.data)
    //this.userService.getUsers().subscribe((data:any)=>console.log(data.data['is_admin']))
}

}
