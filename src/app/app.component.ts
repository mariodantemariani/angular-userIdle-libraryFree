import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IdleUserService } from './services/idle-service.service';

const SERVICES: any[] = [IdleUserService];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [SERVICES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Idle User Service Example';

  isUserIdle: boolean = false;

  constructor(private idleUserService: IdleUserService) {}

  ngOnInit() {
    this.idleUserService.userInactive.subscribe(
      (isIdle) => (this.isUserIdle = isIdle)
    );
  }

  reset() {
    console.log('Reset idle timer');
    this.isUserIdle = false;
    this.idleUserService.reset();
  }
}
