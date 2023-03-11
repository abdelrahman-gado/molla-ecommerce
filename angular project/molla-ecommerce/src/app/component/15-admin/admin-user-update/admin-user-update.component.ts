import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-admin-user-update',
  templateUrl: './admin-user-update.component.html',
  styleUrls: ['./admin-user-update.component.css']
})
export class AdminUserUpdateComponent implements OnInit{
id: number = 0
user: User = {} as User
constructor(private route:ActivatedRoute,private userService:UserService){}

ngOnInit(): void {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.userService.getUsersById(this.id).subscribe((data:any)=>this.user=data)
}
}
