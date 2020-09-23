import {Component, OnInit} from '@angular/core';
import {AuthStore} from '../stores/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authStore: AuthStore) {
  }

  ngOnInit(): void {
    this.authStore.getCurrentUser();
  }
}
