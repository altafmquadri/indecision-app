/* 
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets="env,react" --watch 
*/

class VisibiltyToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return { show: !prevState.show }
        })
    }

    render() {
        const { show } = this.state
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {!show ? 'Show Details' : 'Hide Details'}
                </button>
                {show && <p>Here are the details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'))

// let show = false

// const toggleDetails = () => {
//     show = !show
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toggleDetails}>
//                 {!show ? 'Show Details' : 'Hide Details'}
//             </button>
//             {show && <p>Here are the details</p>}
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'))
// }

// render()


