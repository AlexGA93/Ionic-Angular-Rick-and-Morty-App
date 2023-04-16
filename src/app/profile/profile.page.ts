import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserslistService } from '../services/userslist.service';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../types/UsersTypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  profileCharacter?: Result | undefined;

  constructor(
    private ar: ActivatedRoute,
    private us: UserslistService
    ) {}

  ngOnInit() {
    
    this.us
        .getUserInformation(this.ar.snapshot.paramMap.get('id')!)
        .subscribe((res) => {
          this.profileCharacter = res;
        })
  }

}
