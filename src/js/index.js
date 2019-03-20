import registerServiceWorker from './registerServiceWorker';
import navigatorStyling from './nav';

console.log('ENV', process.env.NODE_ENV);

registerServiceWorker();
navigatorStyling();
