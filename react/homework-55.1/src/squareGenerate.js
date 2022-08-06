export default class SquareGen {
  gen = () => {
    const arr = [];
    const rand = Math.floor(Math.random() * 36);
    for (let index = 0; index < 36; index++) {
      if (rand === index) {
        arr.push({ id: index, show: false, hasItem: true })
      }
      else {
        arr.push({ id: index, show: false })
      }
    }
    return arr;
  }
}
