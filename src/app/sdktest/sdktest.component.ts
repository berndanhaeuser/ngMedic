import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from '../shared/sdk';
import {Person} from '../shared/sdk/models'

import {BASE_URL, API_VERSION} from '../shared/base.url';
import {PersonApi} from "../shared/sdk/services/custom/Person";
import {LoopBackFilter} from "../shared/sdk/models/BaseModels";
@Component({
  selector: 'app-sdktest',
  templateUrl: './sdktest.component.html',
  styleUrls: ['./sdktest.component.css']
})
export class SdktestComponent implements OnInit {

  private personen: Person[];

  constructor(private personApi: PersonApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    this.lesePersonenArray();
  }

  lesePersonenArray(){

    this.personApi.find().subscribe(persListe => this.personen = persListe);
  }


}
