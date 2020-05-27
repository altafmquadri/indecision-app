/*
Instruction in video 9 Setting up Babel
npm init
npm i -g babel-cli@6.24.1
npm i babel-preset-react@6.24.1
npm i babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch 

to unistall
npm uninstall -g babel-cli
npm i live-server
create scripts in package.json
"scripts": {
    "serve": "live-server public/"
},

to run npm i live-server
*/

console.log('hi');
console.log('another one');


const oldSyntax = new OldSyntax()
console.log(oldSyntax);
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting());


class NewSyntax {
    name = 'Quadri'
    getGreeting = () => {
        return `Hi. My Name is ${this.name}`
    }
}

const newSyntax = new NewSyntax()
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting());

