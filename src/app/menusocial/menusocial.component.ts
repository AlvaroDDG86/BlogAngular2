import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-menusocial',
  templateUrl: './menusocial.component.html',
  styleUrls: ['./menusocial.component.css'],
  providers: [ComunicationService]
})
export class MenusocialComponent implements OnInit {
  public social = [];
  constructor(private _service: ComunicationService) {
    
  }

  ngOnInit() {
    this.social = this._service.getListaSocial();
  }

}
