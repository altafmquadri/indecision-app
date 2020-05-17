/* 
babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets="env,react" --watch 
*/

console.log('test');

const multiplier = {
    numbers: [5, 6, 7],
    mulitplyBy: 2,
    multiply() {
        return this.numbers.map(num => num * this.mulitplyBy)
    }
}
console.log(multiplier.multiply())