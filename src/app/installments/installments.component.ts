import {Component, OnInit} from '@angular/core';
import {InstallmentsService} from './installments.service';
import {IInstallments} from './installments';

@Component({
  selector: 'app-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.scss']
})
export class InstallmentsComponent implements OnInit {

  installments: IInstallments[] = [];

  constructor(private installmentsService: InstallmentsService) {
    console.log('a ajuns pe installments');
  }

  ngOnInit() {


    this.installmentsService.getInstallments().subscribe(
      installments => {
        console.log(installments);
        this.installments = Object.keys(installments).map(it => installments[it]);

        var i = 0;
        for (i; i < this.installments.length; i++) {
          console.log('installments elements:', this.installments[i]);
        }
      },
      error => console.log('error on subscribe')
    );
  }

}
