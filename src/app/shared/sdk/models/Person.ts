/* tslint:disable */
import {
  Take
} from '../index';

declare var Object: any;
export interface PersonInterface {
  name: string;
  birthdayyear: number;
  birthdaymonth: number;
  birthdayday: number;
  email?: string;
  id?: any;
  takes?: Array<Take>;
}

export class Person implements PersonInterface {
  name: string;
  birthdayyear: number;
  birthdaymonth: number;
  birthdayday: number;
  email: string;
  id: any;
  takes: Array<Take>;
  constructor(instance?: PersonInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
}
