import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 id: number = 0

constructor(private userService:UserService, private route:ActivatedRoute){}

ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any)=>this.users=data.data)
    //this.userService.getUsers().subscribe((data:any)=>console.log(data.data['is_admin']))
    this.route.params.subscribe(params=>this.id = +params['id'])
}

}
