import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.scss']
})
export class TransferPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
