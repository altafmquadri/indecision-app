'use strict';

var template = React.createElement(
  'p',
  null,
  'Does this change?'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

/* babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch */
