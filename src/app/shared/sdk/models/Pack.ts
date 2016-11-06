/* tslint:disable */

declare var Object: any;
export interface PackInterface {
  isopen: boolean;
  openedDate?: Date;
  mylabel: string;
  amountleft: number;
  amountStd: number;
  id?: any;
}

export class Pack implements PackInterface {
  isopen: boolean;
  openedDate: Date;
  mylabel: string;
  amountleft: number;
  amountStd: number;
  id: any;
  constructor(instance?: PackInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pack`.
   */
  public static getModelName() {
    return "Pack";
  }
}
