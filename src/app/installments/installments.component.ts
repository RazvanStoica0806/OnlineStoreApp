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
  clicked: boolean;

  constructor(private installmentsService: InstallmentsService) {
    this.clicked = false;
  }

  ngOnInit() {


    this.installmentsService.getInstallments().subscribe(
      installments => {
        console.log(installments);
        this.installments = Object.keys(installments).map(it => installments[it]);



      },
      error => console.log('error on subscribe')
    );
  }

  userHasClicked(){
    this.clicked = !this.clicked;
  }

}
