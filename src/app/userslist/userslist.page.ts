import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserslistService } from '../services/userslist.service';
import { Result } from '../types/UsersTypes';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserslistPage implements OnInit {

  usersList: Result[] = [];

  constructor(private us:UserslistService) { }

  ngOnInit() {
    console.log(this.usersList.length);
    
    this.us.getUsers().subscribe((response) => {
      // console.log(response.results);
      this.usersList = response.results;
    })
  }

}
