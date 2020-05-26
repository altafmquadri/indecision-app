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

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['item one', 'item two']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) this.setState(() => ({ options }))
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data');
        }
    }

    componentWillUnmount() {
        console.log('cwun');
    }

    'handleDeleteOptions'() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(o => o !== option)
        }))
    }

    handlePick() {
        let random = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[random]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) return 'Enter valid value to add item'
        if (this.state.options.indexOf(option) > -1) return 'This option already exists'
        this.setState(prevState => ({ options: [...prevState.options, option] }))
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'
        const { options } = this.state
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {!props.options.length && <p>Please add an option to get started</p>}
            {props.options.map((o, i) => (
                <Option key={i}
                    optionText={o}
                    handleDeleteOption={props.handleDeleteOption}
                />))}
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        const { error } = this.state
        return (
            <div>
                {error && <p> This Option already exists</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text'
                        name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))