export class Ship {
  public readonly id: string;
  public fuelCapacity: number;
  public fuelLevel: number;
  public weightCapacity: number;
  public readonly pilotId: string;

  constructor(props: Object) {
    Object.assign(this, props);
  }
}
