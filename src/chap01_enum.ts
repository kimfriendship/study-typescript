enum StarbucksGrade {
  WELCOME,
  GREEN,
  GOLD
}

function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(StarbucksGrade);
// {
//   '0': 'WELCOME',
//   '1': 'GREEN',
//   '2': 'GOLD',
//   WELCOME: 0,
//   GREEN: 1,
//   GOLD: 2
// }