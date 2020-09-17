import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-beneficiary-page',
  templateUrl: './beneficiary-page.component.html',
  styleUrls: ['./beneficiary-page.component.scss']
})
export class BeneficiaryPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
