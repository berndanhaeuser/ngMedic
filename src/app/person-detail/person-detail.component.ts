import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../shared/sdk/models/Person";
import {PersonApi} from "../shared/sdk/services/custom/Person";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {MdlDialogOutletService, MdlDialogReference} from "angular2-mdl";

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

    person: Person = new Person();
    istNeuePerson: boolean = true;
    title: string = ""

    constructor(private personApi: PersonApi, private route: ActivatedRoute, private dialogService: MdlDialogReference) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            if (id !== "new") {
                this.personApi.findById(id).subscribe((p: Person) => {
                    this.person = p;
                    this.title = "Details für Person " + this.person.name;
                    this.istNeuePerson = false;
                });

            }else{
                this.title = "Neue Person"
                this.istNeuePerson = true;
            }
        });
    }


    onSubmit(): void{
        if(this.istNeuePerson){
            this.personApi.create(this.person).subscribe((neu: any) => console.dir(neu));
        }else{
            this.personApi.updateAttributes(this.person.id,this.person).subscribe((neu: any) => {
                console.dir(neu);
                alert("Update erfolgreich")
                let result = this.dialogService.
                result.then( () => console.log('alert closed') );
            });
        }
    }

}
