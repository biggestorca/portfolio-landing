import registerServiceWorker from './registerServiceWorker';
import navigatorStyling from './nav';
import burgerMenu from './burgerMenu';
import smoothScrollToAnchor from './smoothScrollToAnchor';
import worksChanger from './worksChanger';

const env = process.env.NODE_ENV;

if (env === 'production') {
  registerServiceWorker();
}

burgerMenu();
worksChanger();
smoothScrollToAnchor();
navigatorStyling();
