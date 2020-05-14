var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

var template = (
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

var user = {
    name: 'Altaf Quadri',
    hobby: 'Riding a Motorcycle',
    location: 'New York'
}

function getLocation(location) {
    if (location) return <p>Location: {location}</p>
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.hobby && <p>{user.hobby}</p>}
        {getLocation(user.location)}
    </div>
)




var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)


/*
Instruction in video 9 Setting up Babel
npm init
npm i -g babel-cli@6.24.1
npm i babel-preset-react@6.24.1
npm i babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch */