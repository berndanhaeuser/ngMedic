import { Component, OnInit } from '@angular/core';
import {PersonApi} from "../shared/sdk/services/custom/Person";
import {Person} from "../shared/sdk/models/Person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {


  private personenArray: Person[] = new Array<Person>();

  constructor(private personApi: PersonApi, private router: Router) { }

  ngOnInit() {

    //Personenarray initial einlesen
    this.personApi
        .find()
        .subscribe(
            persListe =>
                this.personenArray = persListe
        );
  }

  onClick(rowPerson: Person): void{
    console.log("Click auf Person " + rowPerson);
    this.router.navigate(['/persons', rowPerson.id])
  }

}
