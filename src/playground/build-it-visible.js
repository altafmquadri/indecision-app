/* 
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets="env,react" --watch 
*/


let show = false

const toggleDetails = () => {
    show = !show
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibilty Toggle</h1>
            <button onClick={toggleDetails}>
                {!show ? 'Show Details' : 'Hide Details'}
            </button>
            {show && <p>Here are the details</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}

render()


