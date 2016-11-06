/* tslint:disable */
import {
  Pack,
  Take
} from '../index';

declare var Object: any;
export interface MedicInterface {
  name: string;
  form: string;
  hersteller?: string;
  url?: string;
  id?: any;
  packs?: Array<Pack>;
  takes?: Array<Take>;
}

export class Medic implements MedicInterface {
  name: string;
  form: string;
  hersteller: string;
  url: string;
  id: any;
  packs: Array<Pack>;
  takes: Array<Take>;
  constructor(instance?: MedicInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Medic`.
   */
  public static getModelName() {
    return "Medic";
  }
}
