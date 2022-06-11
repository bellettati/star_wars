export class Contract {

  public readonly id: string;
  public readonly description: string;
  public readonly payload: Object[];
  public readonly origin: string;
  public readonly destination: string;
  public readonly value: number;
  public isOpen: boolean = true;
  
  constructor(props: Omit<Contract, 'isOpen'>) {
    Object.assign(this, props);
  }
}