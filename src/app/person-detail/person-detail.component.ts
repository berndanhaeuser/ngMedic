import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../shared/sdk/models/Person";
import {PersonApi} from "../shared/sdk/services/custom/Person";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person = new Person();

  constructor(private personApi: PersonApi, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id']; // (+) converts string 'id' to a number
     this.personApi.findById(id).subscribe((p: Person) => this.person = p);
    });
  }

}
