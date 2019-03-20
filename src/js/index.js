import registerServiceWorker from './registerServiceWorker';
import navigatorStyling from './nav';
import burgerMenu from './burgerMenu';
import smoothScrollToAnchor from './smoothScrollToAnchor';

console.log('ENV', process.env.NODE_ENV);

registerServiceWorker();
burgerMenu();
smoothScrollToAnchor();
navigatorStyling();
