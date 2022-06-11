import { planetsGraph } from '../providers/Planets';

export const findPath = (planetA: string, planetB: string) => {

  let visited = new Set();
  const queue = [planetA];

  const paths = [0, 0];
  let index = 0;
  let shortestPath: number;

  while (queue.length > 0) {

    const curr = queue.shift();

    if (curr === planetB) {
      shortestPath = paths[0] < paths[1] ? paths[0] : paths[1];
      return shortestPath;
    }

    for (let neighbour of planetsGraph[curr]) {

      if (!neighbour)
        return -1;

      if (index >= 2) {
        index = 0;
      }

      if (!visited.has(neighbour[0])){
        visited.add(neighbour[0]);
        queue.push(neighbour[0]);

        paths[index] = paths[index] += neighbour[1];
        index++;
      }
    }
  }
  return -1;
}