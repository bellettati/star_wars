import contractModel from './contract.model';
import IContract from './contract.interface';

class ContractService {
  
  public generate = async (): Promise<IContract | void> => {

    const planets = [ 'Andvari', 'Demeter', 'Aqua', 'Calas' ];
    const payload = [
      { resource: 'water', amount: this.randomNumberBetweeen(100, 500)},
      { resource: 'food', amount: this.randomNumberBetweeen(100, 500) },
      { resource: 'minerals', amount: this.randomNumberBetweeen(100, 500) },
    ]
    const origin = planets[this.randomNumber(planets.length)];
    const possibleDestinations = planets.filter(planet => planet !== origin);
    console.log(possibleDestinations);
    const destination = possibleDestinations[this.randomNumber(possibleDestinations.length)];

    const description = `${payload[0].amount} tons of ${payload[0].resource}, ${payload[1].amount} tons of ${payload[1].resource} and ${payload[2].amount} tons of ${payload[2].resource} exported from ${origin} to ${destination}.`

    let value = 0;
    payload.forEach((res) => value += res.amount * 5);
    console.log(value);

    try{
      const contract = await contractModel.create(
        {
          description: description,
          payload: payload,
          origin: origin,
          destination: destination,
          value: value,
        }
      )
      return contract;
    } catch(e: any) {
      throw new Error('unable to generate contract');
    }   
  }
  private randomNumber = (limit: number): number => {
    return Math.floor(Math.random() * limit);
  }
  private randomNumberBetweeen = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public getAll = async (): Promise<IContract[] | void> => {
    try {
      const contracts = await contractModel.find({ }).exec();
      return contracts;
    } catch(e: any) {
      throw new Error('unable to get contracts');
    }
  }

  public getOpenContracts = async (): Promise<IContract[] | void> => {
    try{
      const openContracts = await contractModel.find({ open: true }).exec();
      return openContracts;
    } catch(e: any) {
      throw new Error('unable to get open contracts');
    }
  }

  public getClosedContracts = async (): Promise<IContract[] | void> => {
    try {
      const closedContracts = await contractModel.find({ open: false }).exec();
      return closedContracts;
    } catch(e: any) {
      throw new Error('unable to get closed contracts');
    }
  }

  public deleteAll = async (): Promise<string | void> => {
    try {
      await contractModel.deleteMany({ });
      return 'all contracts were deleted';
    } catch(e: any) {
      throw new Error('unable to delete contracts');
    }
  }

}

export default ContractService;