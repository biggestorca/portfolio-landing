const registerServiceWorker = () => {
  if ('serviceWorker' in window.navigator) {
    if (!window.navigator.serviceWorker.controller) {
      // Register the service worker
      window.navigator.serviceWorker.register('pwabuilder-sw.js', {
        scope: './',
      });
    }
  }
};

export default registerServiceWorker;
