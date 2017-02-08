import './app/vendor';
import 'angular-mocks';

const context = require.context('./app', true, /\.spec\.js$/);
context.keys().forEach(context);
