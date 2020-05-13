var template = <p>Does this change?</p>
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)


/* 
Instruction in video 9 Setting up Babel
npm init
npm i -g babel-cli@6.24.1
npm i babel-preset-react@6.24.1
npm i babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch */