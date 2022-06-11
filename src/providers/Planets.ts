const planetList = ['andvari', 'demeter', 'aqua', 'calas'];

const planetsGraph = {
  andvari: [ [ 'aqua', 13 ] , [ 'calas', 23 ] ],
  demeter: [ [ 'aqua' , 22 ], [ 'calas', 25 ] ],
  aqua: [ [ 'demeter', 30 ], [ 'calas', 12 ] ],
  calas: [ [ 'andvari', 20 ], [ 'demeter', 25 ], [ 'aqua', 15 ] ],
};

export { planetList, planetsGraph };