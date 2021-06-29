const args = process.argv.map(Number).filter(Number.isInteger);
const result = args.reduce((x, y) => x + y, 0);

console.log(result);
