// defining a global environment for jQuery and other libraries:
global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
global.NodeFilter = window._core.NodeFilter