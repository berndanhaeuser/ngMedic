/* tslint:disable */

declare var Object: any;
export interface TakeInterface {
  istaken: boolean;
  date?: Date;
  amount?: number;
  id?: any;
}

export class Take implements TakeInterface {
  istaken: boolean;
  date: Date;
  amount: number;
  id: any;
  constructor(instance?: TakeInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Take`.
   */
  public static getModelName() {
    return "Take";
  }
}
