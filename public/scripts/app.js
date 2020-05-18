'use strict';

/* 
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets="env,react" --watch 
*/

var show = false;

var toggleDetails = function toggleDetails() {
    show = !show;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibilty Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            !show ? 'Show Details' : 'Hide Details'
        ),
        show && React.createElement(
            'p',
            null,
            'Here are the details'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
