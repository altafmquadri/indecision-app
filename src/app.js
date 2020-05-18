const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) app.options.push(option), e.target.elements.option.value = ''
    render()
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && app.options.length ?
                <p>Here are your options</p> :
                <p>No options</p>}
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')


render()






/*
Instruction in video 9 Setting up Babel
npm init
npm i -g babel-cli@6.24.1
npm i babel-preset-react@6.24.1
npm i babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch */