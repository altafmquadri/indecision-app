const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && app.options.length ?
            <p>Here are your options</p> :
            <p>No options</p>}

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

let count = 0
const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button
                id="my-id"
                className="button"
                onClick={addOne}>+1</button>
            <button
                className="button"
                onClick={minusOne}>-1</button>
            <button
                className="button"
                onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(template2, appRoot)
}

renderCounterApp()


/*
Instruction in video 9 Setting up Babel
npm init
npm i -g babel-cli@6.24.1
npm i babel-preset-react@6.24.1
npm i babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch */