export const getWinner = (p, d) => {
  if (d.score > p.score) {
    return 'dealer';
  } else return 'player';
}